import { useEffect, useState } from 'react';
import { httpFetchExchangedData } from './requests';

function useExchangedData() {
  const [exchangedData, setExchangedData] = useState({
    primaryCurrency: null,
    secondaryCurrency: null,
    exchangeRate: 0
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (choosenPrimaryCurrency, choosenSecondaryCurrency) => {
    setLoading(true);
    setError(null);

    try {
      const data = await httpFetchExchangedData(choosenPrimaryCurrency, choosenSecondaryCurrency);
      setExchangedData({
        primaryCurrency: choosenPrimaryCurrency,
        secondaryCurrency: choosenSecondaryCurrency,
        exchangeRate: data?.exchangeRate || 0
      });
    } catch (err) {
      setError('Failed to fetch exchange rate');
    } finally {
      setLoading(false);
    }
  };

  return { exchangedData, loading, error, fetchData };
}

export default useExchangedData;