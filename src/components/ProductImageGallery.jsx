import React from "react";

const ProductImageGallery = ({ imageURLs }) => {
  if (imageURLs.length == 0) return null;
  return (
    <div>
      {imageURLs.map((imageURL) => {
        return (
          <li key={imageURL}>
            <img src={imageURL}/>
          </li>
        );
      })}
    </div>
  );
};

export default ProductImageGallery;
