import { useEffect } from "react";
import * as allImages from "../assets";

const PreloadImages = () => {
  useEffect(() => {
    const images = Object.values(allImages);

    const imageObjects = images.map((image) => {
      const img = new Image();
      img.src = image;
      return img;
    });

    imageObjects.forEach((image) => {
      image.onload = () => {
        console.log(`Image ${image.src} preloaded`);
      };
    });

    return () => {
      imageObjects.forEach((image) => {
        image.onload = null;
      });
    };
  }, []);

  return null;
};

export default PreloadImages;