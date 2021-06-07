import React from 'react';

export default function Post({article}) {

    const hasImg = article.thumbnail !== 'self' && article.thumbnail !== 'default' ? true : false;

    return (
        <div>
            <h1>{article.subreddit}</h1>
            <h3>{article.title}</h3>
            {hasImg &&
                <img 
                    src={article.thumbnail} 
                    alt="thumbnail"
                />
            }
            <div>
                <div>Ups: {article.ups}</div>
            </div>
        </div>
    );
}