import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterBySearch } from '../assets/helpers';
import { isLoadingPosts, loadPosts, selectPosts } from '../features/Post/postsSlice';
import { selectSearchTerm, setSearchTerm } from '../features/Search/searchTermSlice';
import Spinner from 'react-bootstrap/Spinner';
import Col from 'react-bootstrap/Col';

const layout = {
    PostList: {
        md: { span: 9, order: 'first' }
    }
}

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
        return <Col md={layout.PostList.md}>
                    <h2>Loading...</h2> 
                    <Spinner animation="border" variant="secondary" />
                </Col>
    }

    return (
            <Col md={layout.PostList.md}>
                {posts.map(post => filterBySearch(post, searchTerm))}
            </Col>
        );
}
