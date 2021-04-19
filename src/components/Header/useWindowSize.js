import { useState, useEffect } from 'react';
// Source: https://usehooks.com/useWindowSize/
export default function useWindowSize() {
   const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
   });
   useEffect(() => {
      function handleResize() {
         setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
         });
      }
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
   }, []);
   return windowSize;
}
