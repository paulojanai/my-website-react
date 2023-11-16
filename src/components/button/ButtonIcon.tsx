import { icons } from 'lucide-react';

interface ButtonIconProps {
  nameIcon: string;
  href?: string;
}

const ButtonIcon = ({ nameIcon, href }: ButtonIconProps) => {
  const LucideIcon = icons[nameIcon];

  return (
    <a href={href} target='_blank' className='btn-icon-primary'>
      <LucideIcon className='icon' />
    </a>
  );
};

export default ButtonIcon;
