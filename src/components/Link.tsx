import { icons } from 'lucide-react';

type Link = {
  text: string;
  link?: string;
  nameIcon: string;
};

function Link({ text, link, nameIcon }: Link) {
  const LucideIcon = icons[nameIcon];

  return (
    <>
      <a href={link} target='_blank' className='footer-link'>
        <LucideIcon color='white' size={18} />
        <span>{text}</span>
      </a>
    </>
  );
}

export default Link;