import React from "react";
import "./SwitchPage.css";

//Allows user to switch between different pages, either go to previous page or go to next page
class SwitchPage extends React.Component {
  render() {
    const { updatePageNum, videoListArrayLength, pageNum } = this.props;

    return (
      <div className="switchPage">
        <div
          className="prevPage"
          onClick={() => {
            updatePageNum("prevPage", videoListArrayLength);
          }}
        >
          Prev Page
        </div>
        <div className="currentPage">{`Page ${pageNum}`}</div>
        <div
          className="nextPage"
          onClick={() => {
            updatePageNum("nextPage", videoListArrayLength);
          }}
        >
          Next page
        </div>
      </div>
    );
  }
}

export default SwitchPage;
