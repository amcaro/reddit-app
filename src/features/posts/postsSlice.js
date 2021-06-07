import { createSlice } from "@reduxjs/toolkit";

const initialState = {articles: [], comments: []};

export const postsSlice = createSlice({ 
    name: 'posts',
    initialState: initialState,
    reducers: {
        addPosts(state, action) {
            const posts = action.payload;
            state.articles = posts;
        }
    }
});

export const selectPosts = state => state.posts.articles;
export const { addPosts } =  postsSlice.actions;
export default postsSlice.reducer;