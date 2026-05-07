import { useState, useEffect, useRef } from 'react';

let formatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

async function currencySymbols (){
  const url = 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '4df89369a1msh896ceb0bc9301f4p1c673ajsn0c8416e8657d',
      'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    const data = JSON.parse(result).symbols;
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function convertCurrency(from, to, amount) {
  const url = `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${from}&to=${to}&amount=${amount}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '4df89369a1msh896ceb0bc9301f4p1c673ajsn0c8416e8657d',
      'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

function CurrencyConverter() {
  const [loadData, setLoadData] = useState(true);
  const [symbols, setSymbols] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [rate, setRate] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const debounceTimer = useRef(null);


  useEffect(() => {
    currencySymbols().then((data) => {
      if (data) {
        setSymbols(Object.keys(data));
        setLoadData(false); 
      } else {
        console.error('Failed to fetch symbols:', data);
      }
    });
  }, [loadData]);

  useEffect(() => {
    if (!amount) return;
    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      convertCurrency(fromCurrency, toCurrency, amount).then((data) => {
        setConvertedAmount(formatter.format(data.result));
        setRate(data.info.rate);
        setFromCurrency(data.query.from);
        setToCurrency(data.query.to);

        const timestamp = data.info.timestamp;
        const date = new Date(timestamp * 1000);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        setLastUpdated(`${hours}:${minutes}`);
      });
    }, 500);

    return () => clearTimeout(debounceTimer.current);
    
  }, [amount, fromCurrency, toCurrency]);

  function getEnteredAmount(e) {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmount(value); 
      console.log('amount', value);
    }
  }

  

  return (
    <div className="flex justify-center p-8 bg-gray-100">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-xl border border-gray-100">

        {/* Input row */}
        <div className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-2">

          {/* FROM */}
          <fieldset className="flex-1 rounded-xl border border-gray-200 px-4 py-2 hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition">
            <legend className="px-1 text-xs text-gray-500">From</legend>
            <div className="flex h-14 items-center gap-3">
              <div className="flex flex-1 items-center gap-1 overflow-hidden">
                {/* <span className="text-xl font-medium text-gray-400">$</span> */}
                <input
                  type="text"
                  aria-label="From amount"
                  className="w-full border-none bg-transparent text-2xl font-medium text-gray-900 outline-none"
                  // onChange={convertCurrency(fromCurrency, toCurrency, amount)}
                  onInput={getEnteredAmount}
                  value={amount}
                />
              </div>
              {showDropdown ? <select className="bg-transparent border-none outline-none flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition" 
                                      value={fromCurrency}
                                      onChange={(e) => setFromCurrency(e.target.value)}>
                  {symbols.map((code) => (
                    <option key={code} value={code}>
                      {code} 
                    </option>
                  ))}
                </select> :
              <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition" onClick={() => setShowDropdown(!showDropdown)}>
                <span>{fromCurrency}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" />
                </svg>
              </button>}

            </div>
          </fieldset>

          {/* Swap */}
          <div className="flex items-center justify-center">
            <button
              aria-label="Swap currencies"
              className="rounded-full border border-gray-200 bg-white p-2.5 hover:bg-gray-50 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 17" className="h-4 w-4 rotate-90 text-gray-500 md:rotate-0">
                <path fill="currentColor" fillRule="evenodd" d="M11.726 1.273l2.387 2.394H.667V5h13.446l-2.386 2.393.94.94 4-4-4-4-.94.94zM.666 12.333l4 4 .94-.94L3.22 13h13.447v-1.333H3.22l2.386-2.394-.94-.94-4 4z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* TO */}
          <fieldset className="flex-1 rounded-xl border border-gray-200 px-4 py-2 hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition">
            <legend className="px-1 text-xs text-gray-500">To</legend>
            <div className="flex h-14 items-center gap-3">
              <div className="flex flex-1 items-center gap-1 overflow-hidden">
                {/* <span className="text-xl font-medium text-gray-400">€</span> */}
                <input
                  type="text"
                  value={convertedAmount}
                  readOnly
                  aria-label="Converted amount"
                  className="w-full border-none bg-transparent text-2xl font-medium text-gray-900 outline-none"
                />
              </div>
              {showDropdown ? <select className="bg-transparent border-none outline-none flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition" 
                                      value={toCurrency}
                                      onChange={(e) => setToCurrency(e.target.value)}>
                  {symbols.map((code) => (
                    <option key={code} value={code}>
                      {code} 
                    </option>
                  ))}
                </select> :
              <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition" onClick={() => setShowDropdown(!showDropdown)}>
                <span>{toCurrency}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" />
                </svg>
              </button>}
            </div>
          </fieldset>
        </div>

        {/* Divider */}
        <hr className="my-5 border-gray-100" />

        {/* Rate + CTAs */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-medium text-gray-900">
              {amount===null? '' : '1.00'} {fromCurrency} = <span>{rate}</span>
              <span className="text-gray-400 text-base"></span> {toCurrency}
            </p>
            <p className="mt-1 text-sm text-gray-400">Mid-market rate · {lastUpdated} UTC</p>
          </div>
          <div className="flex gap-2">
          </div>
        </div>

      </div>
    </div>
  );
}

export default CurrencyConverter;