interface TimerProps {
  time: number;
  isTimeUp: boolean;
}

export const Timer = ({ time, isTimeUp }: TimerProps) => {
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className={`
        flex items-center justify-center h-16 w-24 rounded-xl font-bold text-xl
        transition-all duration-300 ease-in-out
        ${isTimeUp 
          ? 'bg-red-500 text-white shadow-lg scale-105' 
          : 'bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-lg hover:shadow-xl'
        }
      `}
      role="timer"
      aria-label={`Time remaining: ${formatTime(time)}`}
    >
      {formatTime(time)}
    </div>
  );
};
