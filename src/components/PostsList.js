import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../features/posts/Post';
import { isLoadingPosts, loadPosts, selectPosts } from '../features/posts/postsSlice';

export default function PostsList({match}) {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const postsLoading = useSelector(isLoadingPosts);
    
    if(match.path === '/') {
        match.path = '/popular';
    }

    useEffect(() => {
        dispatch(loadPosts(match.path));
    }, [dispatch, match]);

    if(postsLoading) {
        return <h2>Loading...</h2>
    }

    return (
            <>
                {posts.map(
                    post => 
                        <div key={post.data.id}> 
                            <Post article={post.data}/>
                        </div>
                )}
            </>
        );
}