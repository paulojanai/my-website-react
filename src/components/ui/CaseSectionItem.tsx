type CaseSectionItemProps = {
  title: string;
  children?: React.ReactNode;
};

export const CaseSectionItem = ({ title, children }: CaseSectionItemProps) => {
  return (
    <div data-aos='fade-up' className='case-section-item'>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
