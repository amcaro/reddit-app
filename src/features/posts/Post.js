import React from 'react';
import showdown from 'showdown';
import { isHTML } from '../../assets/helpers';
import Comments from '../../components/Comments';

export default function Post({article}) {
    const hasImg = article.preview !== undefined ? true : false;

    const convert = new showdown.Converter();

    return (
        <div key={article.id}>
            <div className="Article-title">
            {   isHTML(article.subreddit)?
                    <h1 dangerouslySetInnerHTML={{__html: article.subreddit}} /> :
                    <h1>{article.subreddit}</h1>
            }
            {   isHTML(article.title)?
                    <h2 dangerouslySetInnerHTML={{__html: article.title}} /> :
                    <h2>{article.title}</h2>
            }
            </div>
            {hasImg &&  
                <div className="article-img">
                    <img 
                        src={article.preview.images[0].source.url.replace('amp;s', 's').replace('&amp;', '&')} 
                        alt="article preview"
                    />
                </div>   
            }
            {   isHTML(article.selftext)?
                    <p dangerouslySetInnerHTML={{__html: article.selftext}} /> :
                    <div dangerouslySetInnerHTML={{__html: convert.makeHtml(article.selftext)}} />
            }
            <div>
                <div>Ups: {article.ups}</div>
            </div>
            <div>
                <Comments article={article}/>
            </div>
        </div>
    );
}