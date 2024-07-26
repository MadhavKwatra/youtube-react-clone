import "./Video.scss";

const Video = () => {
  return (
    <article className="video-container">
      <a href="#" className="thumbnail" data-timestamp="12:24">
        <img
          src="https://picsum.photos/250/150?gravity=center"
          alt=""
          className="thumbnail-image"
        />
      </a>
      <div className="video-section-bottom">
        <a href="#">
          <img src="https://picsum.photos/36" alt="" className="channel-icon" />
        </a>
        <div className="video-details">
          <a href="#" className="video-title">
            Video Title
          </a>
          <a href="#" className="video-channel-name">
            Channel name
          </a>
          <div className="video-metadata">
            <span>12K views</span> • <span>1 week ago</span>
          </div>
        </div>
      </div>
    </article>
  );
};
export default Video;
