import React from 'react';

const SubmitButton = ({ currentStep }) => (
  <div className="w-full text-center">
    <button tabIndex={`${currentStep ? '0' : '-1'}`} type="submit" className="rounded px-4 py-2 bg-red-400 hover:bg-red-600 text-white text-2xl">Submit Now</button>
  </div>
);

export default SubmitButton;
