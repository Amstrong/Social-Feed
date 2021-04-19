import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../../assets/images/Tidal.png';
import * as actions from '../../actions/postsActions';
import { Container, Input, Text, Title, Btn, Center, Img, ErrorText } from './Config.styles';
import { Link } from 'react-router-dom';
export default function Config() {
   const [error, setError] = useState(false);
   const interval = useSelector(state => state.interval);
   const limit = useSelector(state => state.limit);
   const feedUrl = useSelector(state => state.feedURL);
   const dispatch = useDispatch();

   function validation(n) {
      return Number.isInteger(n);
   }
   function handleChange(e) {
      setError(false);
      dispatch(actions.lastID(null));
      if (e.target.name === 'feedUrl') {
         dispatch(actions.feedUrl(e.target.name));
      }

      if (e.target.name === 'limit') {
         if (validation(Number(e.target.value))) {
            dispatch(actions.limit(e.target.value));
         } else {
            setError(true);
         }
      }

      if (e.target.name === 'interval') {
         if (validation(Number(e.target.value))) {
            dispatch(actions.interval(e.target.value));
         } else {
            setError(true);
         }
      }
   }
   return (
      <Container>
         <Center>
            <Img src={Logo} alt="Logo" />
         </Center>
         <Title>Please enter your new parameters!</Title>
         <Text>Feed URL</Text>
         <Input placeholder={feedUrl} name="feedUrl" onChange={handleChange} />
         <Text>Number of posts to display</Text>
         <Input placeholder={limit} name="limit" type="number" onChange={handleChange} />
         <Text>Update interval</Text>
         <Input placeholder={interval} name="interval" type="number" onChange={handleChange} />
         <Center>
            {error ? (
               <Btn disabled>Savre</Btn>
            ) : (
               <Link to="/">
                  <Btn>Save</Btn>
               </Link>
            )}
            {error && <ErrorText role="alert">Your data entered is not correct</ErrorText>}
         </Center>
      </Container>
   );
}
