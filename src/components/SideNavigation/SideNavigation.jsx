import "./SideNavigation.scss";
import HomeFilledIcon from "../../assets/home_filled_white_24dp.svg";
import ExploreIcon from "../../assets/explore_white_24dp.svg";
import SubcriptionsIcon from "../../assets/subscriptions_white_24dp.svg";
import VideoLibraryIcon from "../../assets/video_library_white_24dp.svg";
import HistoryIcon from "../../assets/history_white_24dp.svg";

const SideNavigation = (props) => {
  return (
    <div class={`side-nav ${props.isExtended ? "extended" : ""}`}>
      <div class="side-nav-section">
        <ul>
          <li>
            <a href="#">
              <img src={HomeFilledIcon} alt="" /> Home
            </a>
          </li>
          <li>
            <a href="#">
              <img src={ExploreIcon} alt="" />
              Explore
            </a>
          </li>
          <li>
            <a href="#">
              <img src={ExploreIcon} alt="" />
              Shorts
            </a>
          </li>
          <li>
            <a href="#">
              <img src={SubcriptionsIcon} alt="" />
              Subscriptions
            </a>
          </li>
        </ul>
      </div>
      <div
        class="side-nav-section"
        style={{ display: props.isExtended ? "block" : "none" }}
      >
        <ul>
          <li>
            <a href="">
              <img src={VideoLibraryIcon} alt="" /> Library
            </a>
          </li>
          <li>
            <a href="">
              <img src={HistoryIcon} alt="" /> History
            </a>
          </li>
          <li>
            <a href="">Your Videos</a>
          </li>
          <li>
            <a href="">Watch later</a>
          </li>
          <li>
            <a href="">Liked videos</a>
          </li>
          <li>
            <a href="">Show More</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideNavigation;
