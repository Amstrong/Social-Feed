import React from 'react';
import { Container, Find, ContBtn } from './Rating.styles';
import Button from '../BigButton/BigButton';
export default function Rating() {
   return (
      <Container>
         <Find>Find Out YOUR Online Advertising Readiness Rating!</Find>
         <ContBtn>
            <Button handleClick={''} text={'START QUIZ'} />
         </ContBtn>
      </Container>
   );
}
