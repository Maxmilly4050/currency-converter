export default function CurrencyConverter() {
  return (
    <div className="flex justify-center p-8">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-xl border border-gray-100">

        {/* Input row */}
        <div className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-2">

          {/* FROM */}
          <fieldset className="flex-1 rounded-xl border border-gray-200 px-4 py-2 hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition">
            <legend className="px-1 text-xs text-gray-500">From</legend>
            <div className="flex h-14 items-center gap-3">
              <div className="flex flex-1 items-center gap-1 overflow-hidden">
                <span className="text-xl font-medium text-gray-400">$</span>
                <input
                  type="text"
                  defaultValue="1.00"
                  aria-label="From amount"
                  className="w-full border-none bg-transparent text-2xl font-medium text-gray-900 outline-none"
                />
              </div>
              <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition">
                <span className="text-lg">🇺🇸</span>
                <span>USD</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" />
                </svg>
              </button>
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
                <span className="text-xl font-medium text-gray-400">€</span>
                <input
                  type="text"
                  defaultValue="0.854803"
                  readOnly
                  aria-label="Converted amount"
                  className="w-full border-none bg-transparent text-2xl font-medium text-gray-900 outline-none"
                />
              </div>
              <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition">
                <span className="text-lg">🇪🇺</span>
                <span>EUR</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" />
                </svg>
              </button>
            </div>
          </fieldset>
        </div>

        {/* Divider */}
        <hr className="my-5 border-gray-100" />

        {/* Rate + CTAs */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-medium text-gray-900">
              1.00 USD = <span>0.8548</span>
              <span className="text-gray-400 text-base">03</span> EUR
            </p>
            <p className="mt-1 text-sm text-gray-400">Mid-market rate · 19:48 UTC</p>
          </div>
          <div className="flex gap-2">
            <button className="h-10 rounded-lg border border-gray-200 bg-gray-50 px-5 text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
              Track rates
            </button>
            <button className="h-10 rounded-lg bg-blue-600 px-5 text-sm font-medium text-white hover:bg-blue-500 transition">
              Send money
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}