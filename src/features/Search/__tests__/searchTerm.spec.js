import searchTermReducer, {
    setSearchTerm,
    selectSearchTerm,
  } from '../searchTermSlice';

  describe('searchTerm reducer', () => {
    const initialState = {
        searchTerm: '',
    };
    it('should handle initial state', () => {
        expect(searchTermReducer(undefined, {})).toEqual({
          searchTerm: '',
        });
      });
    
    it('should set search term', () => {
      const actual = searchTermReducer(initialState, setSearchTerm('testing'));
      expect(actual.searchTerm).toEqual('testing');
    });
    
    it('should return set search term', () => {
        const testSearch = 'testing2';
        const actual = searchTermReducer(initialState, setSearchTerm(testSearch));
        expect(selectSearchTerm({searchTerm: actual})).toEqual(testSearch);
    });
  });
  