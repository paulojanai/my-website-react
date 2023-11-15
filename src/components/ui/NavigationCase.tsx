import { useState } from 'react';
import { IItemNavigationCase } from '@data/cases/casesWork';

type NavigationCaseProps = {
  items?: IItemNavigationCase[];
};

export const NavigationCase = ({ items }: NavigationCaseProps) => {
  const [linkActive, setLinkActive] = useState('section-overview');

  const handleClickNav = (link: string) => {
    const initPosition: number = document.getElementById(link)?.offsetTop || 0;

    setLinkActive(link);

    window.scrollTo({
      top: initPosition - 160,
      behavior: 'smooth',
    });
  };

  return (
    <nav className='navbar-case'>
      <ul>
        {items?.map((item, index) => {
          return (
            <li key={index}>
              <a onClick={() => handleClickNav(item.linkID)}>
                <h3 className={linkActive === item.linkID ? 'active' : ''}>
                  {item.title}
                </h3>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
