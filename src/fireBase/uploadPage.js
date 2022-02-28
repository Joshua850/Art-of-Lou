import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "../pages/header";
import Untitlied_Artwork from "../Untitled_Artwork.png";
import "../App.scss";

function FileUploadPage() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="banner">
      <div className="header">
        <div className="logo-banner">
          <img src={Untitlied_Artwork} className="art-banner" alt="Art" />
        </div>
        Art of Lou
      </div>
      <Header />

      <div className="form-page">
        <form
          action="https://formsubmit.co/joshuacox8501@gmail.com"
          method="POST"
          enctype="multipart/form-data"
        >
          <h1>Contact me</h1>
          <input type="subject" name="_subject" placeholder="Subject"></input>
          <input type="email" name="email" placeholder="Email Address"></input>
          <input type="text" name="name" placeholder="Name" required></input>

          <textarea
            name="message"
            placeholder="No Detail is too small"
          ></textarea>

          <input
            type="file"
            name="attachment"
            accept="image/png, image/jpeg"
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div classNme="Body-Upload"></div>
      <div className="footer"></div>
    </div>
  );
}
export default FileUploadPage;
