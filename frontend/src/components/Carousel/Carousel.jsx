import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Carousel.css";

const BREAKPOINTS = {
  1200: { slidesPerView: 4 },
  900: { slidesPerView: 3 },
  600: { slidesPerView: 2 },
  0: { slidesPerView: 1 },
};

function ProductCarousel({ children }) {
  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const totalSlides = React.Children.count(children);

  const handleBreakpoint = (swiper) => {
    setSlidesPerView(swiper.params.slidesPerView);
  };

  return (
    <div className="custom-carousel-root">
      {activeIndex > 0 && (
        <button
          className="custom-swiper-arrow left"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Önceki"
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <polyline
              points="22,8 12,18 22,28"
              stroke="#222"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onBreakpoint={handleBreakpoint}
        slidesPerView={4}
        slidesPerGroup={1}
        spaceBetween={32}
        loop={false}
        breakpoints={BREAKPOINTS}
        style={{ padding: "0 16px" }}
      >
        {React.Children.map(children, (child, idx) => (
          <SwiperSlide key={idx}>{child}</SwiperSlide>
        ))}
      </Swiper>
      {activeIndex < totalSlides - slidesPerView && (
        <button
          className="custom-swiper-arrow right"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Sonraki"
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <polyline
              points="14,8 24,18 14,28"
              stroke="#222"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default ProductCarousel;
