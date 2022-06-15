import './App.css'
import React from 'react'
// import Youtube from "react-youtube";
import { Routes, Route } from 'react-router-dom'
import SearchBar from './components/SearchBar'
// import Video from "./components/Video";
import VideoGallery from './components/VideoGallery'
import ShowVideo from './components/ShowVideo'
import Nav from './components/Nav'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      searchedYoutubeVideos: [],
    }
  }

  fetchRequestHandler = (searchInput) => {
    let youtubeVideos = []
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?maxResults=10&q=${searchInput}&key=AIzaSyCpmUJbJ5kPdifR9m62nsOXYohK53HFlag&part=snippet`
    )
      .then((result) => {
        return result.json()
      })
      .then((data) => {
        const videos = data.items
        console.log(videos)
        youtubeVideos = videos.map((video) => {
          return {
            title: video.snippet.title,
            thumbnails: video.snippet.thumbnails.high.url,
            videoId: video.id.videoId,
          }
        })
        this.setState({ searchedYoutubeVideos: youtubeVideos })
      })
  }

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
          <About />
        </Routes>
      </div>
    )
  }
}

export default App
