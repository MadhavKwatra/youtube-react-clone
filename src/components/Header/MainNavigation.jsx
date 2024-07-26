import { Link } from "react-router-dom";
import "./MainNavigation.scss";
import HamburgerMenuIcon from "../../assets/menu_white_24dp.svg";
import YoutubeLogo from "../../assets/yt_logo_rgb_dark.png";
import SearchIcon from "../../assets/search_white_24dp.svg";
import MicIcon from "../../assets/mic_white_24dp.svg";
import VideoUploadIcon from "../../assets/video_call_white_24dp.svg";
import NotificationsIcon from "../../assets/notifications_none_white_24dp.svg";
import ArrowBackIcon from "../../assets/arrow_back_white_24dp.svg";
import { useState } from "react";

const MainNavigation = (props) => {
  return (
    <header className="header">
      <div className="header-left-section">
        <a href="#" className="side-nav-btn" onClick={props.onClickSideNavBtn}>
          <img src={HamburgerMenuIcon} alt="" />
        </a>
        <Link to="/">
          <img src={YoutubeLogo} alt="YouTube Logo" className="youtube-logo" />
        </Link>
      </div>
      <div className="search">
        <form action="" className="search-bar">
          <input
            className="search-input"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button type="submit" className="search-btn">
            <img src={SearchIcon} alt="" />
          </button>
        </form>
        <button className="voice-search-btn">
          <img src={MicIcon} alt="" />
        </button>
      </div>
      <div className="search-mobile">
        <form className="search-form">
          <div className="form-control">
            <button className="back-btn">
              <img src={ArrowBackIcon} alt="" />
            </button>
            <input
              type="search"
              className="search-input"
              placeholder="Search Youtube"
            />
            <button type="submit" className="search-btn">
              <img src={SearchIcon} alt="" />
            </button>
            <button className="voice-search-btn">
              <img src={MicIcon} alt="" />
            </button>
          </div>
          <div className="backdrop"></div>
        </form>
        <button className="search-btn">
          <img src={SearchIcon} alt="" />
        </button>
      </div>
      <div className="menu-icons">
        <a href="#">
          <img src={VideoUploadIcon} alt="Upload Video" />
        </a>
        <a href="#">
          <img src={NotificationsIcon} alt="Notifications" />
        </a>
        <a href="#">
          <img
            className="menu-channel-icon"
            src="https://picsum.photos/36"
            alt="Your Channel"
          />
        </a>
      </div>
    </header>
  );
};

/* 
<header>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/feed/explore"}>Explore</Link>
          </li>
          <li>
            <Link to={"/feed/subscriptions"}>Subcriptions</Link>
          </li>
          <li>
            <Link to={"/feed/library"}>Librar</Link>
          </li>
        </ul>
      </nav>
    </header> */
export default MainNavigation;
