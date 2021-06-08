import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import URLS from "../../api/urls";

const initialState = {
    articles: [],
    isLoadingPosts: false,
    postsFailed: false,
};

export const loadPosts = createAsyncThunk(
    'posts/loadPosts',
    async (postName) => {
        const data = await fetch(URLS.base + postName + '.json');
        const json = await data.json();

        return json;
    }
);

export const postsSlice = createSlice({ 
    name: 'posts',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
        .addCase(loadPosts.pending, (state) => {
            state.isLoadingPosts = true;
            state.postsFailed = false;
        })
        .addCase(loadPosts.fulfilled, (state, action) => {
            const posts = action.payload.data.children;
            state.articles = posts;
            state.isLoadingPosts = false;
            state.postsFailed = false;
        })
        .addCase(loadPosts.rejected, (state) => {
            state.isLoadingPosts = false;
            state.postsFailed = true;
        })
    }
});

export const selectPosts = state => state.posts.articles;
export const isLoadingPosts = state => state.posts.isLoadingPosts;
export default postsSlice.reducer;