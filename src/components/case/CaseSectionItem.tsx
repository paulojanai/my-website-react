type CaseSectionItemProps = {
  title: string;
  children?: React.ReactNode;
};

export const CaseSectionItem = ({ title, children }: CaseSectionItemProps) => {
  return (
    <div data-aos='fade-up' className='case-section-item'>
      <h3>{title}</h3>
      {children}
    </div>
  );
};
