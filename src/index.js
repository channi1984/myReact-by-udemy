import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './component/search_bar';
import VideoList from './component/video_list';
import VideoDetail from './component/video_detail';
const API_KEY = 'AIzaSyC2lyhSWJHdoDd1rOGmgiM8WmY0gXbF8Pc';
//API가 안먹힐때는 API 할달량이 제한걸린건데, 프로젝트 다시 생성해서 API 새로 발급 해야함

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        }

        YTSearch({ key: API_KEY, term: '생활코딩' }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        )
    }
}

ReactDom.render(<App />, document.querySelector('.container'));