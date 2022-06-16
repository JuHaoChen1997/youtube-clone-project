import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import VideoGallery from './components/VideoGallery'
import ShowVideo from './components/ShowVideo'
import Nav from './components/Nav'
import About from './components/About'
import Modal from './components/Modal'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      searchedYoutubeVideos: [],
      comments: [],
      show: false,
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

  showModal = () => {
    this.setState({ show: true })
  }

  closeButton = () => {
    this.setState({ show: false })
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
        <button onClick={() => this.showModal()}>Show Modal</button>
        <Modal show={this.state.show} closeButton={this.closeButton} />
      </div>
    )
  }
}

export default App
