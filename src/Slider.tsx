import React, { useState } from "react";
import "./Slider.css";
const SLIDES = [
  {
    id: 1,
    title: "1",
    imgUrl: "https://via.placeholder.com/550x350/DDDDDD/000000/?text=Slide%201"
  },
  {
    id: 2,
    title: "2",
    imgUrl: "https://via.placeholder.com/550x350/DDDDDD/000000/?text=Slide%202"
  },
  {
    id: 3,
    title: "3",
    imgUrl: "https://via.placeholder.com/550x350/DDDDDD/000000/?text=Slide%203"
  },
  {
    id: 4,
    title: "4",
    imgUrl: "https://via.placeholder.com/350x550/DDDDDD/000000/?text=Slide%204"
  }
];

export const Slider: React.FC<any> = () => {
  const [displayedSlide, setDisplayedSlide] = useState(0);
  const [slideToAnimate, setSlideToAnimate] = useState({
    [displayedSlide]: "selected-slide"
  });

  const slideToRight = (currentSlide: any) =>
    Math.abs(currentSlide + 1) % SLIDES.length;
  const slideToLeft = (currentSlide: any) =>
    Math.abs(
      currentSlide - 1 <= 0
        ? SLIDES.length + (currentSlide - 1)
        : currentSlide - 1
    ) % SLIDES.length;
  const onNext = () => {
    const slide = slideToRight(displayedSlide);
    setSlideToAnimate({
      [displayedSlide]: "slide-left shadow-slide",
      [slide]: "selected-slide slide-left"
    });
    setDisplayedSlide(slide);
  };
  const onPrevious = () => {
    const slide = slideToLeft(displayedSlide);
    setSlideToAnimate({
      [displayedSlide]: "slide-right shadow-slide",
      [slide]: "selected-slide slide-right"
    });
    setDisplayedSlide(slide);
  };
  return (
    <div>
      <div className="slide-dashboard">
        <div className="prev" onClick={onPrevious}>
          <span>{"<"}</span>
        </div>
        <div className="slide-holder">
          {SLIDES.map((eachSlide, index) => {
            return (
              <div className={`slide ${slideToAnimate[index] || ""}`}>
                <img src={eachSlide.imgUrl} alt={eachSlide.title} />
              </div>
            );
          })}
        </div>

        <div className="next" onClick={onNext}>
          <span>{">"}</span>
        </div>
      </div>
    </div>
  );
};
