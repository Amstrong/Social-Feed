import React from 'react';
import SmallButton from '../SmallButton/SmallButton';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, DateContainer } from './lastUpdate.styles';
export default function LastUpdate() {
   const Date = useSelector(state => state.lastUpdate);
   return (
      <Container>
         <DateContainer>Last update: {Date}</DateContainer>
         <Link to="/configuration">
            <SmallButton text={'CONFIGURATION'} />
         </Link>
      </Container>
   );
}
