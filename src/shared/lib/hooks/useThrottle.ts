import { useEffect, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
  const throttleRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  function throttledCallback(...args: any[]) {
    if (!throttleRef.current) {
      callback(...args);
      throttleRef.current = true;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        throttleRef.current = false;
      }, delay);
    }
  }

  return throttledCallback;
}
