import { useCallback, useEffect, useState } from 'react';
import { httpGetCryptoNews } from './requests';

function useCryptoNews() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 

  const getCryptoNews = useCallback(async () => {
    setLoading(true);   // Start loading
    setError(null);     // Reset any existing errors

    try {
      const fetchedCryptoNews = await httpGetCryptoNews();
      setArticles(fetchedCryptoNews);
    } catch (err) {
      setError("Failed to load news.");
    } finally {
      setLoading(false);  // End loading
    }
  }, []);

  useEffect(() => {
    getCryptoNews();
  }, [getCryptoNews]);

  return { articles, loading, error };
}

export default useCryptoNews;