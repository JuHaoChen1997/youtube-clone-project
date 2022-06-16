import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      userComment: "",
      comments: [],
    };
  }

  handleNameChange = (event) => {
    const { value } = event.target;
    this.setState({ userName: value });
  };

  handleCommentChange = (event) => {
    const { value } = event.target;
    this.setState({ userComment: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { userName, userComment, comments } = this.state;

    this.setState({
      comments: [...comments, <strong>{userName}</strong>, userComment],
    });
  };

  render() {
    const { userComment, userName, comments } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Name
          <br />
          <input
            id="text"
            name="name"
            type="text"
            value={userName}
            onChange={this.handleNameChange}
          />
          <br />
          <br />
          Comments
          <br />
          <input
            id="text"
            name="text"
            type="text"
            value={userComment}
            onChange={this.handleCommentChange}
          />
          <br />
          <br />
          <button>Submit</button>
          {comments.map((comment, ind) => (
            <p key={ind}>
              {comment}
              <br />
            </p>
          ))}
        </form>
      </div>
    );
  }
}

export default Form;
