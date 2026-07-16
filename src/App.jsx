import { useState, useEffect} from 'react'
import './App.css'

function CurrencyConverter() {
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("NGN");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // Dynamic rate call form API
  useEffect(() => {
    const fetchRates = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
        if (!response.ok) {
          throw new Error("Unable to fetch exchange rates right now.");
        }
        const data = await response.json();
        setRates(data.rates);
        setLoading(false);
      } catch {
        setError("Couldn't load exchange rates. Please try again in a moment.");
        setLoading(false)
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, [fromCurrency]);

  const rate = rates[toCurrency] || 0;
  const convertedAmount = (Number(amount * rate).toFixed(2));

  return (
    <div className='container'>
      <h1 className='title'>Currency Converter</h1>
      <label htmlFor="currency-converter">
        <input type='number' value={amount} onChange={e => setAmount(e.target.value)}/>
      </label>

      <p>From:</p>
      <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
        {Object.keys(rates).map(currency => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>

      <p>To:</p>
      <select value={toCurrency} onChange={e => setToCurrency(e.target.value)}>
        {Object.keys(rates).map(currency => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>

         {loading && <p>Loading rates...</p>}
         {error && <p role="alert" className='error'>{error}</p>}
         {!loading && !error && (
        <div className='result-display'>{toCurrency} {convertedAmount} </div>
      )}

    </div>
  )
}

function App() {

  return (
    <>
     <CurrencyConverter />
    </>
  )
}

export default App
