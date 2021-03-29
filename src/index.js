import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './component/search_bar';

const API_KEY = 'AIzaSyC2lyhSWJHdoDd1rOGmgiM8WmY0gXbF8Pc';
//API가 안먹힐대는 API 할달량이 제한걸린건데, 프로젝트 다시 생성해서 API 새로 발급 해야함

YTSearch({ key: API_KEY, term: 'surfboards' }, function (date) {
    console.log(date)
})

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
}

ReactDom.render(<App />, document.querySelector('.container'));