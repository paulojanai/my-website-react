type IDataAos = {
  animation?: string;
};

const Separator = ({ animation }: IDataAos) => {
  return <div className='separator' data-aos={animation} />;
};

export default Separator;
