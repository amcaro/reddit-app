import React from 'react';
const data = require('../data/reddit.json');

const reddit = JSON.parse(data);

export default function PostContainer() {

    return (
        <h1>{reddit.data.children[0].subreddit}</h1>
    );
}