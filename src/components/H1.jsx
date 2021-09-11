import React from 'react';

const H1 = ({ className, children }) => (
  <h1 className={`font-header font-bold text-3xl lg:text-5xl mb-4 mt-8 ${className}`}>
    {children}
  </h1>
);

export default H1;
