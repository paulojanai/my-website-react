import { useContext } from 'react';
import { IItemNavigationCase } from '@data/cases/casesWork';
import { NavContext } from '@context/NavContext';

type NavigationCaseProps = {
  items?: IItemNavigationCase[];
};

export const NavigationCase = ({ items }: NavigationCaseProps) => {
  const { activeLinkID, setActiveLinkID } = useContext(NavContext);

  const handleClickNav = (link: string) => {
    setActiveLinkID(link);

    const initPosition: number = document.getElementById(link)?.offsetTop || 0;

    window.scrollTo({
      top: initPosition - 160,
      behavior: 'smooth',
    });
  };

  return (
    <nav data-aos='fade-up' className='navbar-case'>
      <ul>
        {items?.map((item, index) => {
          return (
            <li key={index}>
              <a onClick={() => handleClickNav(item.linkID)}>
                <h3 className={activeLinkID === item.linkID ? 'active' : ''}>
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
