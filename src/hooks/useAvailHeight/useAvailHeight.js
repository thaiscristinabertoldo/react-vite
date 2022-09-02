import { useEffect, useState } from 'react';

export const useAvailHeight = () => {
  const [availHeight, setAvailHeight] = useState(window.screen.availHeight);

  const handleResizeListener = () => {
    setAvailHeight(window.screen.availHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResizeListener);

    return () => window.removeEventListener('resize', handleResizeListener);
  });

  return { availHeight };
};
