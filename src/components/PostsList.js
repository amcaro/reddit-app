import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../features/posts/Post';
import { isLoadingPosts, loadPosts, selectPosts } from '../features/posts/postsSlice';
import { selectSearchTerm, setSearchTerm } from '../features/posts/searchTermSlice';
import showdown  from 'showdown';

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

function filterBySearch(post, searchTerm) {

    if(searchTerm === '') return createPostJSX(post, searchTerm, 'default');
    
    const keyWord = searchTerm.toLowerCase();
    const postTitle = post.data.title.toLowerCase();
    const inTitle = postTitle.includes(keyWord);
    
    if(inTitle) return createPostJSX(post, searchTerm, 'Title');
    
    const subreddit = post.data.subreddit.toLowerCase();
    const inSubreddit = subreddit.includes(keyWord);
    
    if(inSubreddit) return createPostJSX(post, searchTerm, 'Subreddit');
    
    const postText = post.data.selftext.toLowerCase();
    const inText = postText.includes(keyWord);
    
    if(inText) return createPostJSX(post, searchTerm, 'Text');
    
    return null;
}

function createPostJSX(post, searchTerm, changeTerm) {
    let postData;

    switch (changeTerm) {
        case 'Title':
            const htmlTitle = highlightSearchText(post.data.title, searchTerm);
            postData = {...post.data, title: htmlTitle};
            break;
        
        case 'Subreddit':
            const htmlSubreddit = highlightSearchText(post.data.subreddit, searchTerm);
            postData = {...post.data, subreddit: htmlSubreddit};
            break;
        
        case 'Text':
            const convertMD = new showdown.Converter();
            let htmlText = convertMD.makeHtml(post.data.selftext);
            htmlText = highlightSearchText(htmlText, searchTerm);
            postData = {...post.data, selftext: htmlText};
            break;
    
        default:
            postData = post.data;
            break;
    }
    
    return (
        <div key={postData.id}>
            <Post article={postData}/>
        </div>
    );
}

function highlightSearchText(text, searchTerm) {
    const divStart = '<span class="highlight">';
    const divEnd = '</span>'
    const htmlText = '<div>' + text.replace(searchTerm, divStart + searchTerm + divEnd) + '</div>';
    
    return htmlText
}