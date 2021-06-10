import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterBySearch } from '../assets/helpers';
import { isLoadingPosts, loadPosts, selectPosts } from '../features/posts/postsSlice';
import { selectSearchTerm, setSearchTerm } from '../features/posts/searchTermSlice';

export default function PostsList({match}) {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const postsLoading = useSelector(isLoadingPosts);
    const searchTerm = useSelector(selectSearchTerm);
    
    if(match.path === '/') {
        match.path = '/popular';
    }

    useEffect(() => {
        dispatch(loadPosts(match.path));
        dispatch(setSearchTerm(''));
    }, [dispatch, match]);

    if(postsLoading) {
        return <h2>Loading...</h2>
    }

    return (
            <>
            {posts.map(post => filterBySearch(post, searchTerm))}
            </>
        );
}
