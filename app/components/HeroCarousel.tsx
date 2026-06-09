"use client";

import { useEffect, useMemo, useState } from "react";

type HeroCarouselProps = {
  images: string[];
};

export function HeroCarousel({ images }: HeroCarouselProps) {
  const imageCount = images.length;
  const [position, setPosition] = useState(imageCount);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const loopedImages = useMemo(() => [...images, ...images, ...images], [images]);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      goNext();
    }, 4500);

    return () => window.clearInterval(timer);
  }, [isPaused, imageCount]);

  const moveTo = (direction: -1 | 1) => {
    setTransitionEnabled(true);
    setPosition((current) => current + direction);
  };

  const goPrev = () => {
    moveTo(-1);
  };

  const goNext = () => {
    moveTo(1);
  };

  const handleTransitionEnd = () => {
    if (position >= imageCount * 2) {
      setTransitionEnabled(false);
      setPosition(position - imageCount);
    }

    if (position < imageCount) {
      setTransitionEnabled(false);
      setPosition(position + imageCount);
    }
  };

  return (
    <>
      <div
        className="hero-frame"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <div className="hero-gallery-viewport" aria-live="polite">
          <div
            className="hero-gallery-track"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(calc(var(--slide-step) * -${position}))`,
              transitionDuration: transitionEnabled ? "700ms" : "0ms",
            }}
          >
            {loopedImages.map((image, index) => {
              const originalIndex = index % imageCount;

              return (
                <img
                  className="hero-slide"
                  src={image}
                  alt={`Leading Lines Photography wedding gallery ${originalIndex + 1}`}
                  key={`${image}-${index}`}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="gallery-controls">
        <span>Portfolio</span>
        <div className="gallery-buttons">
          <button type="button" onClick={goPrev} aria-label="Show previous wedding image">
            Prev
          </button>
          <button type="button" onClick={goNext} aria-label="Show next wedding image">
            Next
          </button>
        </div>
      </div>
    </>
  );
}
