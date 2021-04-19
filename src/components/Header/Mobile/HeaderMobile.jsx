import React from 'react';
import Logo from '../../../assets/images/TidalMobile.png';
import Girl from '../../../assets/images/girl.jpg';
import SmallButton from '../../SmallButton/SmallButton';
import { LogoContainer, Img, ImageCont, Title, Text, Learn, Information, Btn } from './HeaderMobile.styles';
export default function HeaderMobile() {
   return (
      <>
         <LogoContainer>
            <Img src={Logo} alt="Logo" />
            <SmallButton text={'START QUIZ'} />
         </LogoContainer>
         <ImageCont img={Girl}>
            <Information>
               <Title>What’s Your Online Advertising Readiness Rating?</Title>
               <Text>When you take this quiz, you’ll get a free report that outlines YOUR Readiness Rating.</Text>
               <Btn>START QUIZ</Btn>
               <Learn>Learn more about Readiness Raitings</Learn>
            </Information>
         </ImageCont>
      </>
   );
}
