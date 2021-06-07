import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

const initialState = {comments: []};

const commentsSlice =  createSlice({
    name: 'comments',
    initialState: initialState,
    reducers: {
        addComments(state, action) {
            const comments = action.payload;
            state.comments = comments;
        }
    }
});

export const selectComments = state => state.comments.comments;
export const { addComments } = commentsSlice.actions;
export default commentsSlice.reducer;