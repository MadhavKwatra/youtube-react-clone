import "./Short.scss";

const Short = () => {
  return (
    <article class="short-container">
      <a href="#" class="short-thumbnail">
        <img
          src="https://picsum.photos/100/180?gravity=center"
          alt=""
          class="short-thumbnail-image"
        />
      </a>
      <div class="video-section-bottom">
        <div class="video-details">
          <a href="#" class="video-title">
            Video Title
          </a>
          <div class="video-metadata">
            <span>12K views</span>
          </div>
        </div>
      </div>
    </article>
  );
};
export default Short;
