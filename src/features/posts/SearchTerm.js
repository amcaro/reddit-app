import { useDispatch, useSelector } from 'react-redux';
import { selectSearchTerm, setSearchTerm } from './searchTermSlice';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export default function SearchTerm() {
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);

    function onChangeHandler(e) {
        const text = e.target.value;
        dispatch(setSearchTerm(text))
    }
    
    function clearSearchText() {
        dispatch(setSearchTerm(''))
    }

    return (
        <Row className="search-bar">
            <Col>
                <input
                    value={searchTerm} 
                    name="searchText"
                    onChange={onChangeHandler}
                    placeholder="search"
                />
            </Col>
            <Col>
                <Button variant="secondary" onClick={clearSearchText}>Clear</Button>
            </Col>
        </Row>

    );
}