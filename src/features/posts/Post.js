import React from 'react';
import showdown from 'showdown';
import { isHTML } from '../../assets/helpers';
import Comments from '../../components/Comments';

export default function Post({article}) {
    const thumbnail = article.thumbnail;
    const showImg = thumbnail !== 'self' && 
                    thumbnail !== 'default' &&
                    thumbnail !== 'nsfw' ? true : false;
    
    const convertMD = new showdown.Converter();

    return (
        <div key={article.id}>
            
            {isHTML(article.subreddit)?
                    <h2 dangerouslySetInnerHTML={{__html: article.subreddit}} /> :
                    <h2>{article.subreddit}</h2>
            }
            {isHTML(article.title)?
                <h3 dangerouslySetInnerHTML={{__html: article.title}} /> :
                <h3>{article.title}</h3>
            }
            {showImg &&
                <img 
                    src={article.thumbnail} 
                    alt="thumbnail"
                />
            }
            {isHTML(article.selftext)?
                <p dangerouslySetInnerHTML={{__html: article.selftext}} /> :
                <div dangerouslySetInnerHTML={{__html: convertMD.makeHtml(article.selftext)}} />
            }
            <div>
                <div>Ups: {article.ups}</div>
            </div>
            <Comments article={article}/>
        </div>
    );
}