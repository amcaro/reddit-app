import React from 'react';
import Comments from '../../components/Comments';

export default function Post({article}) {
    const thumbnail = article.thumbnail;
    const showImg = thumbnail !== 'self' && 
                    thumbnail !== 'default' &&
                    thumbnail !== 'nsfw' ? true : false;

    return (
        <div>
            <h1>{article.subreddit}</h1>
            <h3>{article.title}</h3>
            {showImg &&
                <img 
                    src={article.thumbnail} 
                    alt="thumbnail"
                />
            }
            <div>
                <div>Ups: {article.ups}</div>
            </div>
            <Comments article={article}/>
        </div>
    );
}