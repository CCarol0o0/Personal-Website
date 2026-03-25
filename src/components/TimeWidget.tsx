import { useEffect, useState } from 'react';

export default function TimeWidget() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const optionsDate: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Shanghai',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  };
  const optionsTime: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Shanghai',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };

  const dateStr = new Intl.DateTimeFormat('zh-CN', optionsDate).format(time);
  const timeStr = new Intl.DateTimeFormat('zh-CN', optionsTime).format(time);

  return (
    <div className="flex flex-col justify-center p-6 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-3xl shadow-sm h-full hover:shadow-md transition-shadow">
      <p className="text-sm opacity-80 font-medium mb-1 tracking-wider uppercase">Zhengzhou, China</p>
      <p className="text-4xl font-bold font-mono tracking-tight mb-2">{timeStr}</p>
      <p className="text-sm opacity-90">{dateStr}</p>
    </div>
  );
}
