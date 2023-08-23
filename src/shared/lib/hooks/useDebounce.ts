import {
  useCallback, useEffect, useRef,
} from 'react';

export function useDebounce(callback: (...args: any[]) => void, delay: number) {
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
  }, []);

  return useCallback((...args: any[]) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
}
