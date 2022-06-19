import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchBar from "./Components/SearchBar";
import VideoGallery from "./Components/VideoGallery";
import ShowVideo from "./Components/ShowVideo";
import Nav from "./Components/Nav";
import About from "./Components/About";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      searchedYoutubeVideos: [],
      comments: [],
    }
  }

  /**
   *Update the App's state of searchedYoutubeVideos with the user's search result, the
   search result is an array of video object data, contains video's id, title and thumbnail
   * @param {String} searchInput - the search input user type in
   */
  fetchRequestHandler = (searchInput) => {
    let youtubeVideos = [];
    if (searchInput !== "") {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?maxResults=10&q=${searchInput}&key=${process.env.REACT_APP_API_KEY}&part=snippet`
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
        });
    } else {
      this.setState({ searchedYoutubeVideos: [] });
    }
  };

  /**
   *
   * @param {String} videoId
   * @param {String} userName
   * @param {String} userComment
   */
  updateComments = (videoId, userName, userComment) => {
    console.log('update comment')
    const comment = { videoId, userName, userComment }

    const copyOfComments = this.state.comments
    this.setState({
      comments: [...copyOfComments, comment],
    })
  }

  // deleteComment = (userName, userComment) => {
  //   console.log('dfdf')
  //   const comment = { userName, userComment }

  //   this.setState({
  //     comments: this.state.comments.filter((element) => element !== comment),
  //   })
  //   console.log(this.state.comments)
  // }

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
      </div>
    )
  }
}

export default App
