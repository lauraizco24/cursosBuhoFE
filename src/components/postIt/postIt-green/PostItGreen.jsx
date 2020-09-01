import React from "react";
import "../PostIt.css";
import "./PostItGreen.css";

const PostItGreen = ({ categoria, text, icons }) => {
  return (
    <div className="container-green-postit">
      <div className="icos-postit-container">
        <img src={icons} alt="" />
      </div>

      <div className="img-categoria-container">
        <img src={categoria} alt=""></img>
      </div>
      <div className="title-postit-container">
        <h2>{text} </h2>
      </div>
    </div>
  );
};

export default PostItGreen;
