import { useState, useEffect, useRef } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { smallAvatar } from "../../constant/group";

import "./carousel.css";

const Carousel = ({ selected, autoSlideInterval = 3000 }) => {
  const imageInfo = smallAvatar[selected];
  const [currentIndex, setCurrentIndex] = useState(0);
  const progressRefs = useRef([]);

  useEffect(() => {
    const setProgressBar = () => {
      progressRefs.current.forEach((progressBar, index) => {
        progressBar.style.width = "0%";
        progressBar.style.transition = `none`;
        if (index <= currentIndex) {
          setTimeout(() => {
            progressBar.style.width = "100%";
            if (index === currentIndex) {
              progressBar.style.transition = `width 500ms linear`;
            }
          }, 10);
        } else {
          progressBar.style.transition = "none";
        }
      });
    };

    setProgressBar();

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageInfo.images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [currentIndex, imageInfo.images.length, autoSlideInterval]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageInfo.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageInfo.images.length - 1 : prevIndex - 1
    );
  };

  let sliderButtonWidth = 100 / imageInfo.images.length + "%"

  const CarouselAvatar = () => (
    <div className="carouselImgWrapper">
      <img src={imageInfo.url} alt="smallAvatar" />
      <div>{imageInfo.title}</div>
    </div>
  )

  const CarouselIndicator = () => (
    <div className="carousel-indicators">
      {imageInfo.images.map((_, index) => (
        <div key={index} onClick={() => goToSlide(index)} className="indicator" style={{ width: sliderButtonWidth }} >
          <div className="progress-fill" ref={(el) => (progressRefs.current[index] = el)} />
        </div>
      ))}
    </div>
  )

  return (
    <>
      <KeyboardArrowLeftIcon onClick={goToPrevSlide} className="leftArrowBtn" style={{ left: "-70px" }} />
      <div className="carousel">
        <div className="carousel-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {imageInfo.images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} />
          ))}
        </div>
        <CarouselAvatar />
        <CarouselIndicator />
      </div>
      <KeyboardArrowRightIcon onClick={goToNextSlide} className="leftArrowBtn" style={{ right: "-70px" }} />
    </>
  );
};

export default Carousel;
