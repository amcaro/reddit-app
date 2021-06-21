import commentsReducer, {
    selectComments,
    loadComments
} from '../Comment/commentsSlice';

const initialState = {
    comments: {},
    isLoadingComments: false,
    commentsFailed: false,
}

const payload = [
    {data: {children: [{data: {id: '1234'}}]}},
    {data: {children: ['comment1', 'comment2']}}
];

describe('comments reducer', () => {

    it('should handle and empty state', () => {
        expect(commentsReducer(undefined, {})).toEqual(initialState);
    });

    it('it should singal that comments are loading', () => {
        expect(commentsReducer(initialState, {type: loadComments.pending})).toEqual({
            ...initialState,
            isLoadingComments: true
        })
    });

    it('it should singal that comments failed loading', () => {
        expect(commentsReducer(initialState, {type: loadComments.rejected})).toEqual({
            ...initialState,
            commentsFailed: true
        })
    });

    it('it should load comments and organize them by article id', () => {
       expect(commentsReducer(initialState, {type: loadComments.fulfilled, payload: payload})).toEqual(
        {
            comments: { '1234': { comments: ['comment1', 'comment2'], count: 2, visible: false } },  
            isLoadingComments: false,
            commentsFailed: false
          }
       )
    });

    it('should select all comments', () => {
        const actual = commentsReducer(initialState, {type: loadComments.fulfilled, payload: payload});
        expect(selectComments({comments: actual})).toEqual({"1234": {"comments": ["comment1", "comment2"], "count": 2, "visible": false}});
    });
});