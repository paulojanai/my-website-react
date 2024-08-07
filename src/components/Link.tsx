import { icons } from 'lucide-react';
import { XTwitter } from './Icons';

type Link = {
  text: string;
  link?: string;
  nameIcon: keyof typeof icons;
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
        aria-label={`Link to ${link}`}
      >
        {nameIcon === 'Twitter' ? (
          <div className='x-twitter'>
            <XTwitter />
          </div>
        ) : (
          <LucideIcon color='white' size={16} />
        )}
        <span>{text}</span>
      </a>
    </>
  );
}

export default Link;
