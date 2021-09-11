import React from 'react';

const RadioButton = ({
  option, onClick, selected, currentStep,
}) => (
  <div role="listbox" onKeyPress={(e) => (e.charCode === 13 ? onClick() : null)} tabIndex={`${currentStep ? '0' : '-1'}`} className={`cursor-pointer rounded border my-2 py-3 px-4 leading-tight ${selected ? 'bg-gray-900 text-white border-white' : 'bg-gray-200 border-black text-gray-700'}`} onClick={onClick}>{option}</div>
);

export default RadioButton;
