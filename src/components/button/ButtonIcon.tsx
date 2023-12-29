import { XTwitter } from '@components/Icons';
import { icons } from 'lucide-react';

interface ButtonIconProps {
  nameIcon: string;
  href?: string;
}

const ButtonIcon = ({ nameIcon, href }: ButtonIconProps) => {
  const LucideIcon = icons[nameIcon];

  return (
    <a href={href} target='_blank' className='btn-icon-primary'>
      {nameIcon === 'Twitter' ? (
        <div className='x-twitter'>
          <XTwitter size={20} />
        </div>
      ) : (
        <LucideIcon className='icon' color='white' size={20} />
      )}
    </a>
  );
};

export default ButtonIcon;
