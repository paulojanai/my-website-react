import { useState, useEffect } from 'react';

export const useOnScreen = (ref: React.RefObject<HTMLElement>) => {
  const [isOnScreen, setIsOnScreen] = useState(false);

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsOnScreen(entry.isIntersecting);
      // console.log(entry.isIntersecting, entry.target.id);
    },
    { threshold: 0.2 }
  );

  useEffect(() => {
    observer.observe(ref.current!);

    return () => observer.disconnect();
  });

  return isOnScreen;
};
