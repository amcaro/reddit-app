import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from '../features/posts/commentsSlice';
import postsReducer from '../features/posts/postsSlice';


export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
  },
});
