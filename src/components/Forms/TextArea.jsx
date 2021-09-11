import React from 'react';

const TextArea = ({
  name, handleChange, handleBlur, values, currentStep,
}) => (
  <textarea
    tabIndex={`${currentStep ? '0' : '-1'}`}
    rows="4"
    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
    {...{
      name, onChange: handleChange, onBlur: handleBlur, value: values[name],
    }}
  />
);

export default TextArea;
