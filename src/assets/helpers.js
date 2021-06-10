import showdown from 'showdown';
import Post from '../features/posts/Post';

export function htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

export  function isHTML(str) {
    var a = document.createElement('div');
    a.innerHTML = str;
  
    for (var c = a.childNodes, i = c.length; i--; ) {
      if (c[i].nodeType === 1) return true; 
    }
  
    return false;
  }

  export function filterBySearch(post, searchTerm) {

    if(searchTerm === '') return createPostJSX(post, searchTerm, 'default');
    
    const keyWord = searchTerm.toLowerCase();
    const postTitle = post.data.title.toLowerCase();
    const inTitle = postTitle.includes(keyWord);
    
    if(inTitle) return createPostJSX(post, searchTerm, 'Title');
    
    const subreddit = post.data.subreddit.toLowerCase();
    const inSubreddit = subreddit.includes(keyWord);
    
    if(inSubreddit) return createPostJSX(post, searchTerm, 'Subreddit');
    
    const postText = post.data.selftext.toLowerCase();
    const inText = postText.includes(keyWord);
    
    if(inText) return createPostJSX(post, searchTerm, 'Text');
    
    return null;
}

export function createPostJSX(post, searchTerm, changeTerm) {
    let postData;

    switch (changeTerm) {
        case 'Title':
            const htmlTitle = highlightSearchText(post.data.title, searchTerm);
            postData = {...post.data, title: htmlTitle};
            break;
        
        case 'Subreddit':
            const htmlSubreddit = highlightSearchText(post.data.subreddit, searchTerm);
            postData = {...post.data, subreddit: htmlSubreddit};
            break;
        
        case 'Text':
            const convertMD = new showdown.Converter();
            let htmlText = convertMD.makeHtml(post.data.selftext);
            htmlText = highlightSearchText(htmlText, searchTerm);
            postData = {...post.data, selftext: htmlText};
            break;
    
        default:
            postData = post.data;
            break;
    }
    
    return (
        <div key={postData.id}>
            <Post article={postData}/>
        </div>
    );
}

export function highlightSearchText(text, searchTerm) {
    const divStart = '<span class="highlight">';
    const divEnd = '</span>'
    const search = new RegExp(searchTerm,'i')
    const htmlText = '<div>' + text.replace(search, divStart + '$&' + divEnd) + '</div>';
    
    return htmlText
}