import { useEffect, useState } from 'react';
import { TYPING_CONFIG } from '../constants/typing';

export const useTimer = (isRunning: boolean) => {
  const [time, setTime] = useState<number>(TYPING_CONFIG.TEST_DURATION);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTime(prevTime => {
        if (prevTime <= 1) {
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const resetTimer = () => {
    setTime(TYPING_CONFIG.TEST_DURATION);
  };

  const isTimeUp = time === 0;

  return {
    time,
    isTimeUp,
    resetTimer,
  };
};
