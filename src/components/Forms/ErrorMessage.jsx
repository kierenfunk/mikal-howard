import React from 'react';

const ErrorMessage = ({ errors, touched, name }) => {
  if (errors[name] && touched[name]) return <p className="text-red-600 visible text-sm px-3">{errors[name]}</p>;
  return <p className="text-red-600 invisible text-sm px-3">undefined</p>;
};

export default ErrorMessage;
