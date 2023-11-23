import { useContext, useEffect, useRef } from 'react';
import { useOnScreen } from './useOnScreen';
import { NavContext } from '@context/NavContext';

type IUseNavProps = {
  navLinkID?: string;
};

export const useNav = ({ navLinkID = '' }: IUseNavProps) => {
  const ref: React.RefObject<HTMLElement> = useRef(null);
  const { setActiveLinkID } = useContext(NavContext);

  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen) {
      setActiveLinkID(navLinkID);
    }
  }, [isOnScreen, setActiveLinkID, navLinkID]);

  useOnScreen(ref);

  return ref;
};
