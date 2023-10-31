import React from 'react';

type GridContainerProps = {
  children: React.ReactNode;
  dataAos?: string;
  className?: string;
};

const GridContainer = ({
  children,
  dataAos,
  className = '',
}: GridContainerProps) => {
  return (
    <div className={`grid-container ${className}`} data-aos={dataAos}>
      {children}
    </div>
  );
};

export default GridContainer;
