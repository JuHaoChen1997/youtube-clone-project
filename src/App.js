import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchBar from './Components/SearchBar';
import VideoGallery from './Components/VideoGallery';
import ShowVideo from './Components/ShowVideo';
import Nav from './Components/Nav';
import About from './Components/About';
import Error from './Components/Error';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchedYoutubeVideos: [],
    };
  }

  /**
   *Update the App's state of searchedYoutubeVideos with the user's search result, the
   search result is an array of video object data, contains video's id, title and thumbnail
   * @param {String} searchInput - the search input user type in
   */
  fetchRequestHandler = (searchInput, videoNum) => {
    let youtubeVideos = [];

    if (searchInput !== '') {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?maxResults=${videoNum}&q=${searchInput}&key=${process.env.REACT_APP_API_KEY}&part=snippet`,
      )
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          const videos = data.items;
          youtubeVideos = videos.map((video) => {
            return {
              title: video.snippet.title,
              thumbnails: video.snippet.thumbnails.high.url,
              videoId: video.id.videoId,
            };
          });
          this.setState({ searchedYoutubeVideos: youtubeVideos });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      this.setState({ searchedYoutubeVideos: [] });
    }
  };

  render() {
    return (
      <div className='App'>
        <Nav />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <SearchBar fetchRequestHandler={this.fetchRequestHandler} />
                <VideoGallery
                  searchedYoutubeVideos={this.state.searchedYoutubeVideos}
                />
              </>
            }
          />
          <Route
            path='/videos/:id'
            element={
              <ShowVideo
                searchedYoutubeVideos={this.state.searchedYoutubeVideos}
              />
            }
          />
          <Route path='/About' element={<About />} />
          <Route path='/:error' element={<Error />} />
        </Routes>
      </div>
    );
  }
}

export default App;
