import React from 'react';

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

function htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }