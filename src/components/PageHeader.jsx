import React from 'react';

const PageHeader = ({ children }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      {children}
    </div>
  );
};

export default PageHeader;