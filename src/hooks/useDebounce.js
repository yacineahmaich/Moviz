import { useEffect, useState } from "react";

/**
 *
 * @param {*} value - value to debounce
 * @param {number} delay - debounce delay (ms)
 */

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
