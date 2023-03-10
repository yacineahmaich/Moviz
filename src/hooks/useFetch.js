import { useState, useEffect } from "react";
import { TIMEOUT_SEC } from "../config/APP";
import { timeout } from "../utils";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    (async function () {
      try {
        setIsLoading(true);
        setError(null);
        const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);

        if (!res.ok)
          throw new Error("Something went wrong! Please try again 🚨");

        const data = await res.json();

        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;
