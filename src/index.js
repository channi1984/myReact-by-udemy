import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './component/search_bar';
import VideoList from './component/video_list';
const API_KEY = 'AIzaSyC2lyhSWJHdoDd1rOGmgiM8WmY0gXbF8Pc';
//API가 안먹힐때는 API 할달량이 제한걸린건데, 프로젝트 다시 생성해서 API 새로 발급 해야함

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] }

        YTSearch({ key: API_KEY, term: 'keyboard' }, (videos) => {
            this.setState({ videos })
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

ReactDom.render(<App />, document.querySelector('.container'));