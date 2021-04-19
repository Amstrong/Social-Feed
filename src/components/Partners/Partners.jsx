import React from 'react';
import Forbes from '../../assets/images/forbes.png';
import Telegraph from '../../assets/images/telegraph.png';
import Guardian from '../../assets/images/guardian.png';
import UsaToday from '../../assets/images/usaToday.png';
import Times from '../../assets/images/times.png';

import { Container, Img } from './Partners.styles';

export default function Partners() {
   return (
      <Container>
         <Img src={Forbes} alt="Forbes" />
         <Img src={Telegraph} alt="Telegraph" />
         <Img src={Guardian} alt="Guardian" />
         <Img src={UsaToday} alt="UsaToday" />
         <Img src={Times} alt="Times" />
      </Container>
   );
}
