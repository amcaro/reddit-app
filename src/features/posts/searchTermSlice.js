import { createSlice } from "@reduxjs/toolkit";

const initialState = {searchTerm: ''};

export const searchTermSlice = createSlice({
    name: 'searchTerm',
    initialState: initialState,
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        }
    },
});

export const selectSearchTerm = state => state.searchTerm.searchTerm;
export const { setSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;