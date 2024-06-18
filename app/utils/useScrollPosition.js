import { useState, useEffect } from 'react';

const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateScrollY = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
    };

    window.addEventListener('scroll', updateScrollY);

    // Cleanup function to remove the event listener on unmount
    return () => window.removeEventListener('scroll', updateScrollY);
  }, []);

  return scrollY;
};

export default useScrollPosition;
