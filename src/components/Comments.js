import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import URLS from '../api/urls';
import Comment from '../features/posts/Comment';
import { commentsFailed, isLoadingComments, loadComments, selectComments } from '../features/posts/commentsSlice';


export default function Comments({article}) {
    const dispatch = useDispatch();
    const comments = useSelector(selectComments);
    const loadingComments = useSelector(isLoadingComments);
    const loadingCommentsFailed = useSelector(commentsFailed);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let commentsURL = article.permalink.slice(0, -1);
        commentsURL = URLS.base.slice(0, -2) + commentsURL + '.json';
        
        dispatch(loadComments(commentsURL));
    }, [dispatch, article]);

    function onClickHandler() {
        setVisible(!visible);
   }

    if (loadingComments || !comments[article.id]) {
        return <div>Loading</div>;
    } else if (loadingCommentsFailed ) {
        return null;
    }
    
    return (
        <>
            {<button onClick={onClickHandler}>Comment Count: {comments[article.id].count}</button>}
            <div className={visible? 'visible' : 'hidden'}  >
                {comments[article.id].comments.map(comment => 
                    <div key={comment.data.id} >
                        <Comment comment={comment} />
                    </div>
                )}
            </div>
        </>
    );
}

