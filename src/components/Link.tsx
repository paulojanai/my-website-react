import { icons } from 'lucide-react';

type Link = {
  text: string;
  link?: string;
  nameIcon: string;
  download?: boolean;
};

function Link({ text, link, nameIcon, download }: Link) {
  const LucideIcon = icons[nameIcon];

  return (
    <>
      <a
        href={link}
        target='_blank'
        className='link'
        download={download}
        rel='noopener noreferrer'
      >
        <LucideIcon color='white' size={16} />
        <span>{text}</span>
      </a>
    </>
  );
}

export default Link;
