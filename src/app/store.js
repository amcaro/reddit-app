import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import commentsReducer from '../features/posts/commentsSlice';
import postsReducer from '../features/posts/postsSlice';

const middleware = getDefaultMiddleware({
  serializableCheck: false
})

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
  },
  middleware: middleware,
});
