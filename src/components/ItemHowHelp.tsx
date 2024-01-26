type IItemHowHelp = {
  label: string;
};

const ItemHowHelp = ({ label }: IItemHowHelp) => {
  return <li className='body-sm paragraph-medium'>{label}</li>;
};

export default ItemHowHelp;
