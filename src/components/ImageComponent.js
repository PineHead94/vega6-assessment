import arrow from "../assets/right-arrow.png";

function ImageComponent({ image, addImage }) {
  return (
    <div className="image-component-main-component">
      <div className="image-component-wrapper">
        <img
          src={image?.previewURL}
          alt="list-element"
          className="image-component-image"
        />
      </div>
      <div className="image-component-select-button">
        <img
          src={arrow}
          alt="arrow-image"
          className="image-component-arrow"
          onClick={() => addImage(image?.webformatURL)}
        />
      </div>
    </div>
  );
}

export default ImageComponent;
