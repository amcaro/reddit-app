import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchComments } from '../../api/reddit';

const initialState = {
    comments: {},
    isLoadingComments: false,
    commentsFailed: false,
};

export const loadComments = createAsyncThunk(
    'comments/loadComments',
    async (commentsURL) => {
        const json = await fetchComments(commentsURL)
        
        return json;
    }
);

const commentsSlice =  createSlice({
    name: 'comments',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
        .addCase(loadComments.pending, (state) => {
            state.isLoadingComments = true;
            state.commentsFailed = false;
        })
        .addCase(loadComments.fulfilled, (state, action) => {
            state.isLoadingComments = false;
            state.commentsFailed = false;
            
            const articleId = action.payload[0].data.children[0].data.id;
            const comments = action.payload[1].data.children;
            const commentCount = comments.length;
            state.comments[articleId] = {comments: comments, count: commentCount, visible: false};
             
        })
        .addCase(loadComments.rejected, (state) => {
            state.isLoadingComments = false;
            state.commentsFailed = true;
        })
    }
});

export const selectComments = state => state.comments.comments;
export const isLoadingComments = state => state.comments.isLoadingComments;
export const commentsFailed = state => state.comments.commentsFailed;
export default commentsSlice.reducer;