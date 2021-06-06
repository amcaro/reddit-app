import React from 'react';
const data = require('../data/reddit.json');

const reddit = JSON.parse(JSON.stringify(data));

export default function PostContainer() {
    const article = reddit.data.children[1].data
    const hasImg = true ? true : false;

    return (
        <div>
            <h3>{article.title}</h3>
            {hasImg &&
                <img 
                    src={article.thumbnail} 
                    alt="thumbnail"
                />
            }
            <div>
                <div>Ups: {article.ups}</div>
                <div>Downs: {article.downs}</div>
            </div>
        </div>
    );
}