import React from 'react';

type GridContainerProps = {
  children: React.ReactNode;
  dataAos?: string;
};

const GridContainer = ({ children, dataAos }: GridContainerProps) => {
  return (
    <div className='grid-container' data-aos={dataAos}>
      {children}
    </div>
  );
};

export default GridContainer;
