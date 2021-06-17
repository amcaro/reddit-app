import React from 'react';
import { htmlDecode, isHTML } from '../../assets/helpers';
import Comments from '../../components/Comments';
import Card from 'react-bootstrap/Card';


export default function Post({subR, title, text, article}) {
    const styles = {
        img: {maxWidth: '80vh', maxHeight: '80vh'}
    }
    const hasImg = article.preview !== undefined ? true : false;

    return (
        <Card key={article.id}>
            <Card.Header>
                {   isHTML(subR)?
                    <div dangerouslySetInnerHTML={{__html: subR}} /> :
                    <div>{subR}</div>
                }
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    {   isHTML(title)?
                        <div dangerouslySetInnerHTML={{__html: title}} /> :
                        <div>{title}</div>
                    }
                </Card.Title>
                {hasImg &&  
                    <Card.Img
                        style={styles.img}
                        variant="top" 
                        src={article.preview.images[0].source.url.replace('amp;s', 's').replace('&amp;', '&')} 
                        alt="article preview"
                    />
                }
                <Card.Text className="text-center">
                    {   isHTML(text)?
                        <div dangerouslySetInnerHTML={{__html: htmlDecode(text)}} /> :
                        <div dangerouslySetInnerHTML={{__html: htmlDecode(text)}} />
                    }
                </Card.Text>
                <Card.Body>
                    <Comments article={article}/>
                </Card.Body>
                <Card.Subtitle>
                    <div>Ups: {article.ups}</div>
                </Card.Subtitle>
            </Card.Body>
        </Card>
    );
}