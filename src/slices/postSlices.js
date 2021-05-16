import { createSlice } from '@reduxjs/toolkit';

export const postSlices = createSlice({
   name: 'post',
   initialState: {
      posts: [],
      lastId: null,
      limit: 2,
      interval: 5000,
      feedURL: 'https://api.massrelevance.com/MassRelDemo/kindle.json',
      loading: false,
      error: false,
      lastUpdate: '',
   },
   reducers: {
      posts: (state, action) => {
         state.posts = action.payload;
      },
      lastId: (state, action) => {
         state.lastId = action.payload;
      },
      interval: (state, action) => {
         state.interval = action.payload;
      },
      feedURL: (state, action) => {
         state.feedURL = action.payload;
      },
      limit: (state, action) => {
         state.limit = action.payload;
      },
      loading: (state, action) => {
         state.loading = action.payload;
      },
      error: (state, action) => {
         state.error = action.payload;
      },
      lastUpdate: (state, action) => {
         state.lastUpdate = action.payload;
      },
   },
});

// Action creators are generated for each case reducer function
export const { posts, lastId, interval, feedURL, limit, loading, error, lastUpdate } = postSlices.actions;

export default postSlices.reducer;
