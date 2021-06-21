import postReducer, {
  selectPosts,
  loadPosts,
} from '../Post/postsSlice';

const initialState = {
  articles: [],
  isLoadingPosts: false,
  postsFailed: false,
};

const payload = {
  data: { 
    children: [
      "Article1",
      "Article2"
    ]
  }
}

describe('post reducer', () => {
  it('should handle initial state', () => {
      expect(postReducer(undefined, {})).toEqual({
        articles: [],
        isLoadingPosts: false,
        postsFailed: false,
      });
  });
  it('should return bool that posts are loading', () => {
    expect(postReducer(initialState, {type: loadPosts.pending})).toEqual({ 
      ...initialState,
      isLoadingPosts: true,
    });
  });
  it('should return bool that posts have failed to load', () => {
    expect(postReducer(initialState, {type: loadPosts.rejected})).toEqual({ 
      ...initialState,
      isLoadingPosts: false,
      postsFailed: true
    });
  });
  it('should set isLoadingposts and postsFailed to false and correct article data ', () => {
    expect(postReducer(initialState, {type: loadPosts.fulfilled, payload: payload})).toEqual({ 
      articles: payload.data.children,
      isLoadingPosts: false,
      postsFailed: false
    });

  });

  it('should select Posts using selectPosts', () => {
    const actual = postReducer(initialState, {type: loadPosts.fulfilled, payload: payload});
    expect(selectPosts({posts: actual})).toEqual([ "Article1", "Article2"]);
  })

});
  

