import { useEffect, useState } from 'react';
import { Cloud, Sun, CloudRain, CloudLightning, Snowflake, Moon } from 'lucide-react';

export default function WeatherWidget() {
  const [weather, setWeather] = useState<{ temp: number; desc: string; icon: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        if (!apiKey) {
          throw new Error('No API Key');
        }

        // Check cache
        const cached = localStorage.getItem('weatherCache');
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          // Cache for 3 hours (10800000 ms)
          if (Date.now() - timestamp < 10800000) {
            setWeather(data);
            setLoading(false);
            return;
          }
        }

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Zhengzhou&units=metric&lang=zh_cn&appid=${apiKey}`
        );
        const data = await res.json();

        if (data.cod === 200) {
          const weatherData = {
            temp: Math.round(data.main.temp),
            desc: data.weather[0].description,
            icon: data.weather[0].icon,
          };
          setWeather(weatherData);
          localStorage.setItem(
            'weatherCache',
            JSON.stringify({ data: weatherData, timestamp: Date.now() })
          );
        }
      } catch (error) {
        console.error('Weather fetch failed, using fallback.');
        // Fallback
        setWeather({ temp: 22, desc: '晴朗 | 适合做数据', icon: '01d' });
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getIcon = (code: string) => {
    if (code.includes('01')) return <Sun className="w-8 h-8 text-yellow-500" />;
    if (code.includes('02') || code.includes('03') || code.includes('04')) return <Cloud className="w-8 h-8 text-gray-400" />;
    if (code.includes('09') || code.includes('10')) return <CloudRain className="w-8 h-8 text-blue-400" />;
    if (code.includes('11')) return <CloudLightning className="w-8 h-8 text-yellow-600" />;
    if (code.includes('13')) return <Snowflake className="w-8 h-8 text-blue-200" />;
    return <Moon className="w-8 h-8 text-gray-300" />;
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl shadow-sm h-full animate-pulse">
        <div className="w-8 h-8 bg-gray-300 rounded-full mb-2"></div>
        <div className="w-16 h-4 bg-gray-300 rounded"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-[var(--color-card)] border border-[var(--color-border)] rounded-3xl shadow-sm h-full hover:shadow-md transition-shadow">
      {weather && getIcon(weather.icon)}
      <div className="mt-3 text-center">
        <p className="text-2xl font-bold font-mono text-[var(--color-text)]">{weather?.temp}°C</p>
        <p className="text-xs text-[var(--color-accent-secondary)] mt-1 font-medium">{weather?.desc}</p>
      </div>
    </div>
  );
}
