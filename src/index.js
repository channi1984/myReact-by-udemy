import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './component/search_bar';

const API_KEY = 'AIzaSyB46ndi7CLQOj0zB1wSFtGU9u8ISPmHhzk';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

ReactDom.render(<App />, document.querySelector('.container'));