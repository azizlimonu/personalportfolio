import { useState, useEffect } from 'react';

const useScrollNavbar = (): boolean => {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [navbarVisible, setNavbarVisible] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = (): void => {
        const currentScrollPos: number = window.pageYOffset;

        if (currentScrollPos < 70) {
          setNavbarVisible(true);
        } else if (prevScrollPos > currentScrollPos) {
          setNavbarVisible(true);
        } else {
          setNavbarVisible(false);
        }

        setPrevScrollPos(currentScrollPos);
      };

      window.addEventListener('scroll', handleScroll);

      return (): void => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [prevScrollPos]);

  return navbarVisible;
};

export default useScrollNavbar;
