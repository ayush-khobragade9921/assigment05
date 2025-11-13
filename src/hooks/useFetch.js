import { useState, useEffect } from "react";

function useFetch() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    
    if (!window.navigator.onLine) {
      setIsOffline(true);
      setError("You are offline. Please check your internet connection.");
      setLoading(false);
      return;
    }

   
    const timer = setTimeout(() => setLoading(false), 1500);

    
    const goOffline = () => {
      setIsOffline(true);
      setError("No internet connection. Try again later.");
    };

    const goOnline = () => {
      setIsOffline(false);
      setError(null);
    };

    window.addEventListener("offline", goOffline);
    window.addEventListener("online", goOnline);

    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("offline", goOffline);
      window.removeEventListener("online", goOnline);
    };
  }, []);

  return { loading, error, isOffline };
}

export default useFetch;
