import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrencyComponent from './CurrencyComponent';
import InputAmountComponent from './InputAmountComponent';
import FinalConvertedAmt from './FinalConvertedAmt';

// import other components for prop passing (other components will set prop values)

function ConverterComponent() {
  const [initalCurrency, setInitalCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [initalAmt, setInitalAmt] = useState(0);
  const [convertedAmt, setConvertedAmt] = useState(0);
  const [exchangeRate, setExchangeRate] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // use states to handle convertion and loading and error for error handeling when fetching data from API key

  const API_KEY = process.env.REACT_APP_API_KEY;
  // set endpoint for API key (gets all the conversion rates for the based in inital currency (stored in an event object))
  const endPoint = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${initalCurrency}`;
  
  useEffect(() => {
    const fetchData = async () => { 
      try {
        const responseObject = await axios.get(endPoint);  // async/await used to ensure all data from API is fetched
        setExchangeRate(responseObject.data.conversion_rates);   
        setLoading(false);
      }
      catch (error) {
        setError("There was an error trying to fetch data from the API");
        setLoading(false);
      }
    };
    fetchData();
  }, [endPoint, initalCurrency]);  
  // dependency array set for endpoint and initalCurrency because we want to fetch new exchange rates 
  // from the API only when our inital currency or endpoint changes

  const handleAmtChange = (e) => {   // e is the event object that is created each time the user types out a new inital amount
    setInitalAmt(e.target.value);  // so we set our inital amount to e.target.value (the value the user entered) have to extract this way because it is a object
  };   

  // same logic for changeInStartCurrency and changeInEndCurrency (just use the setState functions to set the new currentState for the currencies)
  const changeInStartCurrency = (e) => {
    setInitalCurrency(e.target.value);
  };

  const changeInEndCurrency = (e) => {  
    setTargetCurrency(e.target.value);  
  };

  // function to handle the conversions
  const handleConvert = () => {
    if (exchangeRate[targetCurrency]) {   // have to check if our exchangeRate dictionary has the targetCurrency inside of it (this is an inline if check)
      setConvertedAmt(initalAmt * exchangeRate[targetCurrency]);  
      // if inside we will set our converted amount to the intial amount * the exchange rate to the target currency we want
      // set all of this equal to our convertedAmount state (we will return this to the App.js componenet)
    }
  };

  // error and loading catch to make sure we don't hit an error silently
  if (error) return <div className="text-red-500">{error}</div>;
  if (loading) return <div className="text-gray-500">Loading...</div>;

  // inside return statement put all the props to pass for other componenets to use and set the inital and target currencies, and also the inital amount we need (pass as props and prompt user to enter)
  return (
    <div className="space-y-4">
      <CurrencyComponent 
        initalCurrencyProp={initalCurrency}
        targetCurrencyProp={targetCurrency}
        changeInStartCurrencyProp={changeInStartCurrency}
        changeInEndCurrencyProp={changeInEndCurrency}
      />
      
      <InputAmountComponent
        initalAmtProp={initalAmt}
        handleAmtChangeProp={handleAmtChange}
      />

       {/* made a button to handle the conversion (better UI for user) */} 
       <button
         onClick={handleConvert}
         className="bg-custom-blue hover:bg-custom-blue-dark text-custom-grey hover:text-custom-muted-gold py-2 px-4 rounded-lg transition duration-300"
      >
         Convert
      </button>

      <FinalConvertedAmt 
        convertedAmtProp={convertedAmt}
        targetCurrencyProp={targetCurrency}
      />
    </div>
  );
}

export default ConverterComponent;
