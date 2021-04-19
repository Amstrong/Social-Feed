import React from 'react';
import PropTypes from 'prop-types';
import { Container, Text, Author, Date } from './Card.styles';
export default function Card({ post }) {
   return (
      <>
         <Container>
            <Text>{post.text}</Text>
            <Author>{post.name}</Author>
         </Container>
         <Date id="posted">Posted: {post.created_at}</Date>
      </>
   );
}

Card.propTypes = {
   post: PropTypes.object.isRequired,
};
