import { useState, useEffect } from "react";

const useStateWithSessionStorage = (key, initialValue) => {
  const fromStorage = sessionStorage.getItem(key);
  const [value, setValue] = useState(
    fromStorage ? JSON.parse(fromStorage) : initialValue || ""
  );

  useEffect(() => {
    const persistValue =
      value instanceof Object ? JSON.stringify(value) : value;
    sessionStorage.setItem(key, persistValue);
  }, [key, value]);

  return [value, setValue];
};

export { useStateWithSessionStorage };
