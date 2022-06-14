import React from "react";

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "rain",
      query: "hk1JJhQbkLE",
    };
  }

  updateInputHandler = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  searchHandler = () => {
    //const query = this.state.input;
    console.log(process.env.REACT_APP_API_KEY);

    // `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyCpmUJbJ5kPdifR9m62nsOXYohK53HFlag`
    // fetch(
    //   `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
    // )
    //   .then((data) => {
    //     console.log(data);
    //     return data.json();
    //   })
    //   .then((result) => {
    //     //const URL = result.items[0].id.videoId;
    //     console.log(result);
    //     // this.setState({ query: URL });
    //   });
  };

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.input}
          onChange={this.updateInputHandler}
        />
        <button onClick={this.searchHandler}>Search</button>
        {/* <iframe src={`https://www.youtube.com/embed/` + this.state.query} /> */}
        {/* <YouTube
          video="ya-rr_Lm1N4"
          height="315px"
          width="540px"
          autoplay="1"
        /> */}
      </>
    );
  }
}

export default Test;
