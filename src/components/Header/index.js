import React from 'react';
import useWindowSize from './useWindowSize';
import Header from './Header';
import HeaderMobile from './HeaderMobile';
const verifyEqual = (dimension, size) => {
   if (dimension > size) {
      return true;
   } else {
      return false;
   }
};

export default function index() {
   const windowSize = useWindowSize();
   console.log(windowSize.width)
   const mobile = verifyEqual(1024, windowSize.width);

   return <>{mobile ? <HeaderMobile /> : <Header />}</>;
}
