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
   let title = post.data.title;
   let subR = post.data.subreddit;
   let text = post.data.selftext_html;

    switch (changeTerm) {
        case 'Title':
            title = highlightSearchText(post.data.title, searchTerm);
            break;
        
        case 'Subreddit':
            subR = highlightSearchText(post.data.subreddit, searchTerm);
            break;
        
        case 'Text':
            text = highlightSearchText(post.data.selftext_html, searchTerm);
            break;
    
        default:
            break;
    }
    
    return (
        <div key={post.data.id}>
            <Post subR={subR} title={title} text={text} article={post.data}/>
        </div>
    );
}

export function highlightSearchText(text, searchTerm) {
  return text.replace(new RegExp(searchTerm,'i'), '<span id="mark">$&</span>' );
}