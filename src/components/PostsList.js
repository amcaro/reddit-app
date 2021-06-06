import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../features/posts/Post';
import { addPosts, selectPosts } from '../features/posts/postsSlice';

const url = 'https://www.reddit.com/r/popular.json';


export default function PostsList() {
    const [articles, setArticles ] = useState([]);
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);

    const fetchArticles = async (url) => {
        const data = await fetch(url);
        const reddit = await data.json();
        
        dispatch(addPosts(reddit.data.children)); 
    }
    
    useEffect(() => {
        fetchArticles(url);
        setArticles(posts);
    },[posts]);

    return (
        <div>
                {articles.map(
                    article => <Post article={article.data}/>
                )}
            </div>
        );
}