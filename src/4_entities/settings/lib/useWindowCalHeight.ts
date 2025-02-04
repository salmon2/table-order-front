import { useEffect } from 'react';

export const useWindowCalHeight = () => {
  useEffect(() => {
    const handleResize = () => {
      const vh = (window.innerHeight - 1) * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
};
