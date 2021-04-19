import { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/postsActions';
import { FormatDate } from './FormatDate';

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
   const feedURL = useSelector(state => state.feedURL);
   const lastID = useSelector(state => state.lastId);
   const limit = useSelector(state => state.limit);
   const interval = useSelector(state => state.interval);

   useEffect(() => {
      if (lastID === null) {
         getData();
      } else {
         console.log('ya entra aqui');
         const intervalID = setInterval(getData, interval);
         return () => clearInterval(intervalID);
      }
      const intervalID = setInterval(getData, interval);
      return () => clearInterval(intervalID);
   }, [feedURL, interval, limit, lastID]);

   const getData = async () => {
      try {
         dispatch(actions.loading(true));
         const response = await axios.get(`${feedURL}?limit=${limit};&start_id=${lastID}`);
         dispatch(actions.lastUpdate(FormatDate()));
         const posts = refactorPosts(response.data);
         dispatch(actions.loading(false));
         dispatch(actions.posts(posts));
         dispatch(actions.lastID(posts[posts.length - 1].id_str));
      } catch (error) {
         dispatch(actions.error(true));
         console.log(error.message);
      }
   };
}
