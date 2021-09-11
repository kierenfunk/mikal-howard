import React from 'react';

const H3 = ({ className, children }) => (
  <h3 className={`font-header text-2xl font-bold my-2 ${className}`}>
    {children}
  </h3>
);

export default H3;
