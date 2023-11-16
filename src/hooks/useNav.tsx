import { useRef } from 'react';
import { useOnScreen } from './useOnScreen';

export const useNav = () => {
  const ref: React.RefObject<HTMLElement> = useRef(null);

  useOnScreen(ref);

  return ref;
};
