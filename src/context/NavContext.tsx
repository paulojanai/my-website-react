import { createContext, useState } from 'react';

type INavContext = {
  activeLinkID: string;
  setActiveLinkID: (activeLinkID: string) => void;
};

export const NavContext = createContext<INavContext>({} as INavContext);

type NavProviderProps = {
  children: React.ReactNode;
};

const NavProvider = ({ children }: NavProviderProps) => {
  const [activeLinkID, setActiveLinkID] = useState('section-overview');

  const providerValues = {
    activeLinkID,
    setActiveLinkID,
  };

  return (
    <NavContext.Provider value={providerValues}>{children}</NavContext.Provider>
  );
};

export default NavProvider;
