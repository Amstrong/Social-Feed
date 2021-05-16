import { configureStore } from '@reduxjs/toolkit';
import postSlices from '../slices/postSlices';

export default configureStore({
   reducer: {
      post: postSlices,
   },
});
