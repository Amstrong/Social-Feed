/* eslint-disable no-undef */
import * as actions from './postsActions';
import * as types from '../types/postTypes';

test('Posts action', () => {
   const Post = {
      id: 1,
      name: 'Amstrong',
   };
   const expectedAction = {
      type: types.POSTS,
      payload: Post,
   };
   expect(actions.posts(Post)).toEqual(expectedAction);
});

test('Interval action', () => {
   const interval = 1000;
   const expectedAction = {
      type: types.INTERVALS,
      payload: interval,
   };
   expect(actions.interval(interval)).toEqual(expectedAction);
});

test('LastID action', () => {
   const lastID = 1000;
   const expectedAction = {
      type: types.LAST_ID,
      payload: lastID,
   };
   expect(actions.lastID(lastID)).toEqual(expectedAction);
});

test('Limit action', () => {
   const Limit = 1000;
   const expectedAction = {
      type: types.LIMIT,
      payload: Limit,
   };
   expect(actions.limit(Limit)).toEqual(expectedAction);
});

test('Feed action', () => {
   const FeedURL = 'https://es.reactjs.org/docs/';
   const expectedAction = {
      type: types.FEED_URL,
      payload: FeedURL,
   };
   expect(actions.feedUrl(FeedURL)).toEqual(expectedAction);
});

test('Loading', () => {
   const loading = false;
   const expectedAction = {
      type: types.LOADING,
      payload: loading,
   };
   expect(actions.loading(loading)).toEqual(expectedAction);
});

test('Error', () => {
   const error = true;
   const expectedAction = {
      type: types.ERROR,
      payload: error,
   };
   expect(actions.error(error)).toEqual(expectedAction);
});

test('last Update', () => {
   const lastUpdate = '43434334343434';
   const expectedAction = {
      type: types.LAST_UPDATE,
      payload: lastUpdate,
   };
   expect(actions.lastUpdate(lastUpdate)).toEqual(expectedAction);
});
