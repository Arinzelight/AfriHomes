import { useState } from "react";
import Arrow from "../assets/post-icons/arrow.png";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      setImageIndex(imageIndex === 0 ? images.length - 1 : imageIndex - 1);
    } else {
      setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1);
    }
  };

  return (
    <div className="w-full h-[350px] flex gap-5 sm:h-[280px] ">
      {imageIndex !== null && (
        <div className="fixed inset-0 w-screen h-screen bg-black flex justify-between items-center z-50">
          <div
            className="flex-1 flex items-center justify-center cursor-pointer"
            onClick={() => changeSlide("left")}
          >
            <img src={Arrow} alt="" className="w-12 md:w-8 sm:w-5" />
          </div>
          <div className="flex-10">
            <img
              src={images[imageIndex]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="flex-1 flex items-center justify-center cursor-pointer"
            onClick={() => changeSlide("right")}
          >
            <img
              src={Arrow}
              alt=""
              className="w-12 md:w-8 sm:w-5 transform rotate-180"
            />
          </div>
          <div
            className="absolute top-0 right-0 text-white text-3xl font-bold p-12 cursor-pointer"
            onClick={() => setImageIndex(null)}
          >
            X
          </div>
        </div>
      )}
      <div className="flex-3 sm:flex-2">
        <img
          src={images[0]}
          alt=""
          className="w-full h-full object-cover rounded cursor-pointer"
          onClick={() => setImageIndex(0)}
        />
      </div>
      <div className="flex-1 flex flex-col justify-between  gap-5">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            className="h-[100px] sm:h-[80px] object-cover rounded cursor-pointer"
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
