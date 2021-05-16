import { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { FormatDate } from './FormatDate';
import { loading, posts, lastId, error, lastUpdate } from '../slices/postSlices';

const refactorPosts = Posts =>
   Posts.map(post => {
      return {
         id: post.id,
         id_str: post.id_str,
         text: post.text,
         name: post?.user?.name,
         created_at: post.created_at.slice(0, 20),
      };
   });

export default function usePosts() {
   const dispatch = useDispatch();
   const feedURL = useSelector(state => state.post.feedURL);
   const lastID = useSelector(state => state.post.lastId);
   const limit = useSelector(state => state.post.limit);
   const interval = useSelector(state => state.post.interval);

   useEffect(() => {
      if (lastID === null) {
         getData();
      } else {
         const intervalID = setInterval(getData, interval);
         return () => clearInterval(intervalID);
      }
      const intervalID = setInterval(getData, interval);
      return () => clearInterval(intervalID);
   }, [feedURL, interval, limit, lastID]);

   const getData = async () => {
      try {
         dispatch(loading(true));
         const response = await axios.get(`${feedURL}?limit=${limit};&start_id=${lastID}`);
         dispatch(lastUpdate(FormatDate()));
         const postsRef = refactorPosts(response.data);
         dispatch(loading(false));
         dispatch(posts(postsRef));
         dispatch(lastId(postsRef[postsRef.length - 1].id_str));
      } catch (err) {
         dispatch(error(true));
         console.log(err.message);
      }
   };
}
