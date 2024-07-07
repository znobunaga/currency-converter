import React from 'react';

const FinalConvertedAmt = ({ convertedAmtProp, targetCurrencyProp }) => {
  return (
    <div>
      <h3 className="text-gray-700 font-medium">Converted Amount: {convertedAmtProp} {targetCurrencyProp}</h3>
    </div>
  );
};

export default FinalConvertedAmt;
