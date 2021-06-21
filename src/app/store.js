import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import commentsReducer from '../features/Comment/commentsSlice';
import postsReducer from '../features/Post/postsSlice';
import searchTermReducer from '../features/Search/searchTermSlice';

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
