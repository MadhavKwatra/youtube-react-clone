import SubcriptionsIcon from "../../assets/subscriptions_white_24dp.svg";
import HomeFilledIcon from "../../assets/home_filled_white_24dp.svg";
import VideoLibraryIcon from "../../assets/video_library_white_24dp.svg";
import "./BottomNavigation.scss";
const BottomNavigation = () => {
  return (
    <div class="bottom-nav">
      <nav>
        <ul class="links-container">
          <li>
            <a href="#">
              <img src={HomeFilledIcon} alt="" />
              Home
            </a>
          </li>
          <li>
            <a href="#">
              <img src={VideoLibraryIcon} alt="" />
              Shorts
            </a>
          </li>
          <li>
            <a href="#">
              <img src={SubcriptionsIcon} alt="" />
              Subscriptions
            </a>
          </li>
          <li>
            <a href="#">
              <img src={VideoLibraryIcon} alt="" />
              Library
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default BottomNavigation;
