import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { IItemNavigationCase } from '@data/cases/casesWork';

type NavigationCaseProps = {
  items?: IItemNavigationCase[];
};

export const NavigationCase = ({ items }: NavigationCaseProps) => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    items?.forEach((item) => {
      const section = document.getElementById(item.linkID);
      const element: HTMLAnchorElement | null = document.querySelector(
        `[href='#${item.linkID}']`
      );

      const linkST = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
      });

      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onToggle: (self) => self.isActive && setActive(),
      });

      element?.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: linkST.start - 140,
          behavior: 'smooth',
        });
      });

      const setActive = () => {
        items.forEach((item) => {
          document
            .querySelector(`[href='#${item.linkID}']`)
            ?.classList.remove('active');
        });
        element?.classList.add('active');
      };
    });
  });

  return (
    <nav data-aos='fade-up' className='navbar-case'>
      <ul>
        {items?.map((item, index) => {
          return (
            <li key={index}>
              <a className='item-nav-case' href={`#${item.linkID}`}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
