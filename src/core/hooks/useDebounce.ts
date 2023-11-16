import { useState, useEffect } from "react";

// useDebounce is a function that adds a delay between updates of the value in React. Its purpose is to reduce the frequency of updates, for example, when entering text, in order to reduce the load on the application and improve performance.

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;