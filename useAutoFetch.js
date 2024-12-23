import { useState, useEffect } from 'react';

const useAutoFetch = (url, shouldFetch) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let intervalId;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (shouldFetch) {
      fetchData();
      intervalId = setInterval(fetchData, 10000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [url, shouldFetch]);

  return { data, loading, error };
};

export default useAutoFetch;
