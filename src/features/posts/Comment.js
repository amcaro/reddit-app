import React from 'react';

export default function Comment({comment}) {
    return <div dangerouslySetInnerHTML={{ __html: htmlDecode(comment.data.body_html) }} />
}

function htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }