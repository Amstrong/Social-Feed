import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import usePost from '../../requests/usePosts';

export default function CardLogic() {
   usePost();
   const Posts = useSelector(state => state.posts);
   return (
      <>
         {Posts?.map(post => {
            return <Card key={post.id} post={post} />;
         })}
      </>
   );
}
