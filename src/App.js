import logo from "./logo.svg";
import "./App.scss";
import Gallary from "./pages/gallary";
import About from "./pages/about";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/react-fontawesome";
import Untitlied_Artwork from "./Untitled_Artwork.png";
import FileUploadPage from "./fireBase/uploadPage";
import instagram from "./instagram.svg";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./pages/header";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="submit" element={<FileUploadPage />} />
        </Routes>
      </Router>
    </div>
  );
}
function HomePage() {
  return (
    <div class="homepage">
      <div className="banner">
        <div className="header">
          <div className="logo-banner">
            <img src={Untitlied_Artwork} className="art-banner" alt="Art" />
          </div>
          Art of Lou
        </div>
      </div>
      <Header />

      <div className="App-header">
        <div id="icon">
          <a href="https://www.instagram.com/artof.lou/">
            <img src={instagram} className="icon" alt="gram-logo" />
          </a>
        </div>
        <div className="logo">
          <img src={Untitlied_Artwork} className="art" alt="Art" />
        </div>

        <div className="Gallary" id="gal">
          Gallary
        </div>
        <div className="gallary-layout">
          <Gallary />
        </div>
        <div className="about-sect">
          <h1>About</h1>
        </div>
        <div className="about">
          <p>
            Welcome to Art of Lou. Here you'll find some of my projects and
            passed commissions. I specialise in Miniatures, Ornaments, Digital
            portraits and some larger projects. Some of my Art is modeled after
            traditional Moroccan Styles, you may also find some pieces derived
            Neapolitan themes I am open to commissions, contact me through my
            <a href="https://www.instagram.com/artof.lou/"> Instgram </a> or in
            the Submit A Request section Above.
          </p>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}
export default App;
