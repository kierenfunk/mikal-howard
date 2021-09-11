import React from 'react';

const Input = ({
  name, type, handleChange, handleBlur, values, currentStep,
}) => (
  <input
    tabIndex={`${currentStep ? '0' : '-1'}`}
    {...{
      name, type, onChange: handleChange, onBlur: handleBlur, value: values[name],
    }}
    className="appearance-none block w-full sm:w-2/3 bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
  />
);

export default Input;
