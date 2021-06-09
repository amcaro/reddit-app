import React from 'react';
import { htmlDecode } from '../../assets/helpers';

export default function Comment({comment}) {
    if(comment.kind === 't1') {
        const styles = {
            border: '1px solid rgba(0, 0, 0, 0.05)', 
       };
        return <div 
                    style={styles} 
                    dangerouslySetInnerHTML={{ __html: htmlDecode(comment.data.body_html) }} 
                />
    } 

    return null;
}