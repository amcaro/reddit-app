import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import URLS from '../api/urls';
import Comment from '../features/posts/Comment';
import { commentsFailed, isLoadingComments, loadComments, selectComments } from '../features/posts/commentsSlice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';

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
        return  <>
                    <h6>Comments...</h6> 
                    <Spinner animation="border" variant="secondary" size="sm"/>
                </>;
    } else if (loadingCommentsFailed ) {
        return null;
    }
    
    return (
        <>
            <Card.Text>
                <Button onClick={onClickHandler} variant="primary">
                    <div>Comments [{comments[article.id].count}]</div>
                </Button>
            </Card.Text>
            {visible && 
                <ListGroup className="text-md-justify">
                    {comments[article.id].comments.map(comment => 
                            <ListGroup.Item key={comment.data.id} >
                                <Comment comment={comment} />
                            </ListGroup.Item>
                    )}
                </ListGroup>
            }
        </>
    );
}

