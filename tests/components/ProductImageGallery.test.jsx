import React from "react";
import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("Should render null if no images", () => {
    const { container } = render(<ProductImageGallery imageURLs={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('should render a list of images', () => {
    const  imagesUrls = [
        "https://picsum.photos/id/237/200/300",  // Image of nature
        "https://picsum.photos/id/1074/200/300", // Image of city
        "https://picsum.photos/id/936/200/300",  // Image of animals
      ];
      render(<ProductImageGallery imageURLs={imagesUrls} />)
     const images = screen.getAllByRole("img")
     expect(images).toHaveLength(3)
     images.forEach((image, index) => {
       expect(image).toHaveAttribute("src", imagesUrls[index])
     })
  })
});
