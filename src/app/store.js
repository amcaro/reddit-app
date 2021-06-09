import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import commentsReducer from '../features/posts/commentsSlice';
import postsReducer from '../features/posts/postsSlice';
import searchTermReducer from '../features/posts/searchTermSlice';

const middleware = getDefaultMiddleware({
  serializableCheck: false
})

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    searchTerm: searchTermReducer,
  },
  middleware: middleware,
});
