import React from 'react';
import ConverterComponent from './components/ConverterComponent';

function App() {
  return (
    <div className="bg-custom-dark-blue min-h-screen flex flex-col items-center justify-center">
      {/* make it a flex container to center all items to the center of the screen */}
      <p className="text-center text-6xl font-semibold text-custom-muted-gold mb-8">Currency Converter</p>
      <div className="bg-custom-light-blue p-8 rounded-lg shadow-lg w-full max-w-md">
        <ConverterComponent />
      </div>
    </div>
  );
}

export default App;
