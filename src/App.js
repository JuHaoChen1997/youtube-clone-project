import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import VideoGallery from './components/VideoGallery'
import ShowVideo from './components/ShowVideo'
import Nav from './components/Nav'
import About from './components/About'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      searchedYoutubeVideos: [],
      comments: [],
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

  updateComments = (videoId, userName, userComment) => {
    console.log('update comment')
    const comment = { videoId, userName, userComment }

    const copyOfComments = this.state.comments
    this.setState({
      comments: [...copyOfComments, comment],
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
                comments={this.state.comments}
                updateComments={this.updateComments}
              />
            }
          />
          <Route path='/About' element={<About />} />
        </Routes>
        <br />
      </div>
    )
  }
}

export default App
