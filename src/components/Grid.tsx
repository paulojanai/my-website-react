import React from 'react';

interface GridContainerProps {
  children: React.ReactNode;
}

const GridContainer = ({ children }: GridContainerProps) => {
  return <div className='grid-container'>{children}</div>;
};

export default GridContainer;