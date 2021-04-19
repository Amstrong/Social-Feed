import React from 'react';
import Logo from '../../assets/images/TidalFooter.png';
import { Container, Text, Img } from './Footer.styles';

export default function Footer() {
   return (
      <Container>
         <Img src={Logo} alt="Logo" />
         <Text>©2019 Tidal Traffic. All rights reserved.</Text>
         <Text>©2019 Tidal Traffic. All rights reserved.</Text>
         <Text>About Us | Terms of Service | Privacy Policy</Text>
      </Container>
   );
}
