import React from 'react';

const Section = ({ className, children }) => (
  <div className={`p-4 sm:p-8 md:py-16 ${className}`}>
    {children}
  </div>
);

export default Section;
