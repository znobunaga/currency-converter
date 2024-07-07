import React from 'react';

const InputAmountComponent = ({ initalAmtProp, handleAmtChangeProp }) => {
  return (
    <div>
      <label className="block text-gray-700 font-medium">Amount:</label>
      <input
        type="number"
        placeholder="Enter an amount to be converted"
        value={initalAmtProp}
        onChange={handleAmtChangeProp}
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputAmountComponent;
