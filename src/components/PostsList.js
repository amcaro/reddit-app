import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Comments from '../features/posts/Comments';
import { addComments, selectComments } from '../features/posts/commentsSlice';
import Post from '../features/posts/Post';
import { addPosts, selectPosts } from '../features/posts/postsSlice';

const url = 'https://www.reddit.com/r/popular.json';
const url2 = 'https://www.reddit.com/r/ProgrammerHumor/comments/nu3d5t/i_thought_same_somehow.json';

export default function PostsList() {
    const dispatch = useDispatch();
    const articles = useSelector(selectPosts);
    const comments = useSelector(selectComments);
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        fetchArticles(url);
    }, [posts]);

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