/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

function useDebounced(value, delay) {
  const [debounedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler);
  }, [value]);

  return debounedValue;
}

export default useDebounced;
