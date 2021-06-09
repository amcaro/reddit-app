import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchTerm, setSearchTerm } from './searchTermSlice';


export default function SearchTerm() {
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);

    function onChangeHandler(e) {
        const text = e.target.value;
        dispatch(setSearchTerm(text))
    }
    
    function clearSearchText() {
        dispatch(setSearchTerm(''))
    }

    return (
        <>
            <input 
                value={searchTerm} 
                name="searchText"
                onChange={onChangeHandler}
                placeholder="search"
            />
            <button onClick={clearSearchText}>Clear</button>
        </>

    );
}