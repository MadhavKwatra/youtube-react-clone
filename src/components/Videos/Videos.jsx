import Video from "./Video";
import Short from "./Short";
import YoutubeShortsIcon from "../../assets/youtube_shorts_icon.svg";
import "./Videos.scss";

const Videos = () => {
  const videosArray = new Array(8);
  videosArray.fill(<Video />);

  const shortsArray = new Array(8);
  shortsArray.fill(<Short />);

  console.log(videosArray, "Videos Array");

  return (
    <div className="videos">
      <section className="videos-section">{videosArray}</section>
      <section class="shorts-section">
        <h2 class="video-section-title">
          <img src={YoutubeShortsIcon} alt="" /> Shorts Section
          <button class="video-section-title-close">&times;</button>
        </h2>
        {shortsArray}
      </section>
      <section className="videos-section">
        <h2 class="video-section-title">
          Special Section
          <button class="video-section-title-close">&times;</button>
        </h2>
        {videosArray}
      </section>
    </div>
  );
};
export default Videos;
