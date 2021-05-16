import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../../assets/images/Tidal.png';
import { Container, Input, Text, Title, Btn, Center, Img, ErrorText } from './Config.styles';
import { feedURL, limit, lastId, interval } from '../../slices/postSlices';
import { Link } from 'react-router-dom';
export default function Config() {
   const [error, setError] = useState(false);
   const intervalState = useSelector(state => state.post.interval);
   const limitState = useSelector(state => state.post.limit);
   const feedUrl = useSelector(state => state.post.feedURL);
   const dispatch = useDispatch();

   function validation(n) {
      return Number.isInteger(n);
   }
   function handleChange(e) {
      setError(false);
      dispatch(lastId(null));
      if (e.target.name === 'feedUrl') {
         dispatch(feedURL(e.target.name));
      }

      if (e.target.name === 'limit') {
         if (validation(Number(e.target.value))) {
            dispatch(limit(e.target.value));
         } else {
            setError(true);
         }
      }

      if (e.target.name === 'interval') {
         if (validation(Number(e.target.value))) {
            dispatch(interval(e.target.value));
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
         <Input placeholder={limitState} name="limit" type="number" onChange={handleChange} />
         <Text>Update interval</Text>
         <Input placeholder={intervalState} name="interval" type="number" onChange={handleChange} />
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
