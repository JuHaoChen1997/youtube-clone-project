import React from 'react'
// import YouTube from "react-youtube";

class Test extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',
      query: [],
    }
  }

  updateInputHandler = (event) => {
    this.setState({
      input: event.target.value,
    })
  }

  searchHandler = () => {
    //const query = this.state.input;
    // console.log(process.env.REACT_APP_API_KEY);

    // `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyCpmUJbJ5kPdifR9m62nsOXYohK53HFlag`
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
    )
      .then((data) => {
        // console.log(data);
        return data.json()
      })
      .then((result) => {
        //const URL = result.items[0].id.videoId;
        // console.log(result.items[0].id.videoId);
        // this.setState({ query: result })
        
        this.setState({ query: result})
      })
  }

  render() {

   console.log(this.state.query)
    return (
      <>
        <input
          type='text'
          value={this.state.input}
          onChange={this.updateInputHandler}
        />
        <button onClick={this.searchHandler}>Search</button>
        {/* <iframe
          width='560'
          height='315'
          src={`https://www.youtube.com/embed/${}`}
          frameborder='0'
          allowfullscreen
        ></iframe> */}
      </>
    )
  }
}

export default Test
