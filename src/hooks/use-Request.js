import { useCallback, useState } from "react";

function useRequest() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = useCallback(async (config, funcManupData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(config.url, {
        method: config.method,
        body: config.body,
        headers: config.headers,
      });
      if (!res.ok) {
        throw new Error("Somthing Went Wrong!");
      }
      const data = await res.json();
      funcManupData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }, []);

  return { loading, error, fetchData };
}

export default useRequest;
