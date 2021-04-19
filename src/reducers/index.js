/* eslint-disable import/no-anonymous-default-export */
import { INITIAL_STATE } from "./initialState";
import {
  LAST_ID,
  POSTS,
  INTERVALS,
  FEED_URL,
  LIMIT,
  LOADING,
  ERROR,
  LAST_UPDATE
} from "../types/postTypes";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POSTS:
      return { ...state, posts: action.payload };
    case LAST_ID:
      return { ...state, lastId: action.payload };
    case INTERVALS:
      return { ...state, interval: action.payload };
    case FEED_URL:
      return { ...state, feedUrl: action.payload };
    case LIMIT:
      return { ...state, limit: action.payload };
    case LOADING:
      return { ...state, loading: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    case LAST_UPDATE:
      return {...state, lastUpdate: action.payload};
    default:
      return state;
  }
};
