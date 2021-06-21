import URLS from "./urls";

export const fetchPosts = async (postName) => {
    const data = await fetch(URLS.base + postName + '.json');
    const json = await data.json();
    
    return json;
}

export const fetchComments = async (commentsURL) => {
    const data = await fetch(commentsURL);
    const json = await data.json();

    return json;
}