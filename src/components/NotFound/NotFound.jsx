import React from 'react';
import { Container, Img, Text } from './NotFound.style';
import { Link } from 'react-router-dom';
import Button from '../BigButton/BigButton';
import Vector from '../../assets/images/404.png';
export default function NotFound() {
   return (
      <Container>
         <Img src={Vector} alt="NotFound" />
         <Text>Page not found, please return to home!</Text>
         <Link to="/">
            <Button text={'return home'}></Button>
         </Link>
      </Container>
   );
}
