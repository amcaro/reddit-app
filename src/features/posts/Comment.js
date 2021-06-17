import React from 'react';
import { htmlDecode } from '../../assets/helpers';

const styles = {
    margin: '10px 10px 0 10px',
};

export default function Comment({comment}) {
    
    if(comment.kind === 't1') {
        return <div 
                    style={styles} 
                    dangerouslySetInnerHTML={{ __html: htmlDecode(comment.data.body_html) }} 
                />
    } 

    return null;
}