import React from 'react';

export function WhiteContainer({ children }) {
  
  return (
    <div
      className="bg-white rounded-3xl w-1/1 mx-6 p-8 relative overflow-y-24 px-4 -mt-12 pb-8"
      style={{ height: 'calc(100vh - 48px)' }}
    >
      {children}
    </div>
  );
}
