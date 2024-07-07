import React from 'react';


// currency component handles setting the inital currency and target currency (possible through 4 props down below)
const CurrencyComponent = ({ initalCurrencyProp, targetCurrencyProp, changeInStartCurrencyProp, changeInEndCurrencyProp }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-gray-700 font-medium">From:</label>
        <select value={initalCurrencyProp} onChange={changeInStartCurrencyProp} className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          {/* start with initalCurrencyProp and use onChange = change inital currency function to set our inital currency back in coverter component */}
          <option value="USD">USD (United States Dollar)</option>
          <option value="EUR">EUR (Euro)</option>
          <option value="JPY">JPY (Japanese Yen)</option>
          <option value="INR">INR (Indian Rupee)</option>
          <option value="AUD">AUD (Australian Dollar)</option>
          <option value="MXN">MXN (Mexican Peso)</option>
          <option value="KRW">KRW (South Korean Won)</option>
          <option value="CAD">CAD (Canadian Dollar)</option>
          {/* can add more currencies based off of API exchange */}
        </select>
      </div>
      <div>
        <label className="block text-gray-700 font-medium">To:</label>
        <select value={targetCurrencyProp} onChange={changeInEndCurrencyProp} className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          {/* start with targetCurrencyProp and use onChange = change target currency function to set our target currency back in coverter component */}
          <option value="USD">USD (United States Dollar)</option>
          <option value="EUR">EUR (Euro)</option>
          <option value="JPY">JPY (Japanese Yen)</option>
          <option value="INR">INR (Indian Rupee)</option>
          <option value="AUD">AUD (Australian Dollar)</option>
          <option value="MXN">MXN (Mexican Peso)</option>
          <option value="KRW">KRW (South Korean Won)</option>
          <option value="CAD">CAD (Canadian Dollar)</option>
          {/* can add more currencies based off of API exchange */}
        </select>
      </div>
    </div>
  );
};

export default CurrencyComponent;
