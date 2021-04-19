import React from 'react';
import useWindowSize from './useWindowSize';
import Header from './Desktop/Header';
import HeaderMobile from './Mobile/HeaderMobile';
const verifyEqual = (dimension, size) => {
   if (dimension > size) {
      return true;
   } else {
      return false;
   }
};

export default function index() {
   const windowSize = useWindowSize();
   const mobile = verifyEqual(1024, windowSize.width);

   return <>{mobile ? <HeaderMobile /> : <Header />}</>;
}
