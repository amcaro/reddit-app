import React from 'react';
import Comment from '../features/posts/Comment';

export default function Comments({comments}) {
    
    return (
        <>
        {comments.map(comment => <Comment comment={comment} />)}
        </>
    );
}

