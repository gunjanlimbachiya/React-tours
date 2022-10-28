import React, { useState } from "react";
import imagesList from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { useEffect } from "react";

const Carausel = () => {
  const [images, setImages] = useState(imagesList);
  const [Index, setIndex] = useState(0);

  const length = images.length;

  const nextReview = () => {
    setIndex(Index === length - 1 ? 0 : Index + 1);
  };

  const prevReview = () => {
    setIndex(Index === 0 ? length - 1 : Index - 1);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      setIndex(Index === length - 1 ? 0 : Index + 1);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [Index]);

  return (
    <main>
      <div className="carausel-container">
        {images.map((image, index) => {
          let position = "nextSlide";

          if (index === Index) {
            position = "currentSlide";
          }

          if (
            index == Index - 1 ||
            (Index === 0 && index === images.length - 1)
          ) {
            position = "prevSlide";
          }

          return (
            <article key={image.id} className={position}>
              <img src={image.image} alt="" />
            </article>
          );
        })}
        <div>
          <button className="prev" onClick={() => prevReview()}>
            <FaChevronLeft />
          </button>
          <button className="next" onClick={() => nextReview()}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Carausel;
