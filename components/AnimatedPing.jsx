import React from 'react';

const PingIndicator = ({children, extraStyle}) => {
  return (
      <div className={`relative ${extraStyle}`}>
        <span className="absolute top-[-5%] right-[-10%] flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
      </span>
        {children}
      </div>
  );
};

export default PingIndicator;
