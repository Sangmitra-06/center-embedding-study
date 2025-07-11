import { useState, useRef } from 'react';

export const useTimer = () => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const startTimeRef = useRef(null);

  const startTimer = () => {
    const now = performance.now();
    console.log('Timer started at:', now);
    setStartTime(now);
    startTimeRef.current = now;
  };

  const stopTimer = () => {
    const now = performance.now();
    console.log('Timer stopped at:', now);
    console.log('Start time was:', startTimeRef.current);
    
    if (startTimeRef.current) {
      const elapsed = now - startTimeRef.current;
      console.log('Elapsed time:', elapsed);
      setEndTime(now);
      return elapsed;
    }
    
    console.log('No start time found, returning 0');
    return 0;
  };

  const resetTimer = () => {
    console.log('Timer reset');
    setStartTime(null);
    setEndTime(null);
    startTimeRef.current = null;
  };

  const getElapsedTime = () => {
    if (!startTimeRef.current) return 0;
    return performance.now() - startTimeRef.current;
  };

  return {
    startTimer,
    stopTimer,
    resetTimer,
    getElapsedTime,
    startTime,
    endTime
  };
};