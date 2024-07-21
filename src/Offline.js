import React from 'react';
import useConnection from './useConnection';

const Offline = ({ children, ...props }) => {
  const isOnline = useConnection();

  if (isOnline) {
    return null;
  }

  return (
    <div {...props}>
      {children}
    </div>
  );
};

export default Offline;
