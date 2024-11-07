import { useEffect, useState } from "react";
import useExchangedData from "../hooks/useExchangedData";
import ExchangeRate from "./ExchangeRate";

const currencies = ["BTC", "ETH", "USD", "EUR", "XRP", "LTC", "ADA"];

function CurrencyConverter() {
  const { exchangedData, loading, error, fetchData } = useExchangedData();
  const [choosenPrimaryCurrency, setChoosenPrimaryCurrency] = useState("BTC");
  const [choosenSecondaryCurrency, setChoosenSecondaryCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);

  function convert() {
    fetchData(choosenPrimaryCurrency, choosenSecondaryCurrency);
  }

  useEffect(() => {
    setResult(exchangedData.exchangeRate * amount);
  }, [exchangedData]);

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>

      <div className="input-box">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency:</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </td>
              <td>
                <select
                  value={choosenPrimaryCurrency}
                  name="currency-option-1"
                  className="currency-options"
                  onChange={(e) => setChoosenPrimaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <td>Secondary Currency:</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-2"
                  value={Number(result).toFixed(2)}
                  disabled
                />
              </td>
              <td>
                <select
                  value={choosenSecondaryCurrency}
                  name="currency-option-2"
                  className="currency-options"
                  onChange={(e) => setChoosenSecondaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <button id="convert-button" onClick={convert}>
          convert
        </button>
      </div>

      <ExchangeRate exchangedData={exchangedData} />
    </div>
  );
}

export default CurrencyConverter;
