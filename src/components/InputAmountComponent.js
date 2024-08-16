import React from 'react';

const InputAmountComponent = ({ initalAmtProp, handleAmtChangeProp }) => {
  return (
    <div>
      <label className="block text-custom-grey font-medium">Amount:</label>
      <input
        type="number"
        placeholder="Enter an amount to be converted"
        value={initalAmtProp}
        onChange={handleAmtChangeProp}
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue"
      />
    </div>
  );
};

export default InputAmountComponent;
