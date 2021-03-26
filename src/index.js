import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './component/search_bar';

const API_KEY = 'AIzaSyC38DlDQ8r6eUZUsBbOIIxvEmJwScciLSw';

YTSearch({ key: API_KEY, term: 'surfboards' }, function (date) {
    console.log(data)
})

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

ReactDom.render(<App />, document.querySelector('.container'));