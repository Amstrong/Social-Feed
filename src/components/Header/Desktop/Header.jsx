import React from 'react';
import Tidal from '../../../assets/images/Tidal.png';
import Girl from '../../../assets/images/girl.jpg';
import Button from '../../BigButton/BigButton';
import SmallButton from '../../SmallButton/SmallButton';
import { Section, Information, Title, Subtitle, Soft, Logo, Image, Shadow, BtnContainer } from './Header.styles';
export default function Header() {
   return (
      <Section>
         <Information>
            <Logo src={Tidal} alt="Tidal" />
            <Soft>ATTENTION ONLINE ADVERTISERS</Soft>
            <Title>What’s Your Online Advertising Readiness Rating?</Title>
            <Subtitle>When you take this quiz, you’ll get a free report that outlines YOUR Readiness Rating.</Subtitle>
            <Button handleClick={''} text={'START QUIZ'} />
            <Subtitle>Learn more about Readiness Raitings</Subtitle>
         </Information>
         <Image img={Girl}>
            <BtnContainer>
               <SmallButton handleClick={''} text={'START QUIZ'} />
            </BtnContainer>

            <Shadow>Learning about my rating - and WHAT to do about it, has really changed the way I do online advertising. It is all about being a master at this craft, and staying there. Andrea - Barranquilla, Colombia.</Shadow>
         </Image>
      </Section>
   );
}
