import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Comments from './Comments';
import { addComments, selectComments } from '../features/posts/commentsSlice';
import Post from '../features/posts/Post';
import { addPosts, selectPosts } from '../features/posts/postsSlice';
import URLS from '../api/urls';
import ROUTES from '../app/routes';

export default function PostsList({match}) {
    const dispatch = useDispatch();
    const articles = useSelector(selectPosts);
    const comments = useSelector(selectComments);
    const [ posts, setPosts ] = useState([]);

    const url2 = 'https://www.reddit.com/r/ProgrammerHumor/comments/nu3d5t/i_thought_same_somehow.json';

    useEffect(() => {
        const url = configureURL();
        fetchArticles(url);
    }, [posts]);

    const configureURL = () => {
        switch (match.path) {
            case ROUTES.popular:
                return URLS.popular;
            case ROUTES.gaming:
                return URLS.gaming;
            case ROUTES.trashy:
                return URLS.trashy;
            default:
                return URLS.popular;
        }
    }

    const fetchArticles = async (url) => {
        const data = await fetch(url);
        const articles = await data.json();
        const dataC = await fetch(url2);
        const comments = await dataC.json();
        
        dispatch(addPosts(articles.data.children));
        dispatch(addComments(comments));
        linkComments();
    }

    const linkComments = () => {
       let posts = articles.map(article => {
            return {...article, comments: getNestedComments(comments)};
        });
    
        setPosts(posts);
    }

    const getNestedComments = (comments) => {
        let commentsArr = [];
    
        comments.map(comment => {
            comment.data.children.map(comment => {
                commentsArr.push(comment);
                return null;
            });
            return null;
        });
        
        return commentsArr
    }
    
    return (
        <div>
                {posts.map(
                    article => 
                        <>
                            <Post article={article.data}/>
                            <Comments comments={article.comments}/>
                        </>
                )}
            </div>
        );
}