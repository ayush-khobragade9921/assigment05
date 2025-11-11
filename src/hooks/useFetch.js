import { useEffect, useState } from "react";

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOffline = () => {
      setIsOffline(true);
      setError("No internet connection. Please check your connection.");
    };

    const handleOnline = () => {
      setIsOffline(false);
      setError(null);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    const fetchData = async () => {
      try {
        if (!isOffline) {
          const response = await fetch(url);
          if (!response.ok) throw new Error("Failed to fetch data");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        // delay hiding the loading screen for 2 seconds
        setTimeout(() => setLoading(false), 2000);
      }
    };

    fetchData();

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, [url, isOffline]);

  return { loading, error, isOffline };
}

export default useFetch;
