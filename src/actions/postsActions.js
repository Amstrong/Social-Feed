import {
  LAST_ID,
  POSTS,
  INTERVALS,
  LIMIT,
  FEED_URL,
  LOADING,
  ERROR,
  LAST_UPDATE
} from "../types/postTypes";

export const posts = (payload) => ({
  type: POSTS,
  payload,
});

export const interval = (payload) => ({
  type: INTERVALS,
  payload,
});

export const lastID = (payload) => ({
  type: LAST_ID,
  payload,
});

export const limit = (payload) => ({
  type: LIMIT,
  payload,
});

export const feedUrl = (payload) => ({
  type: FEED_URL,
  payload,
});

export const loading = (payload) => ({
  type: LOADING,
  payload,
});

export const error = (payload) => ({
  type: ERROR,
  payload,
});

export const lastUpdate = (payload) => ({
  type: LAST_UPDATE,
  payload
})