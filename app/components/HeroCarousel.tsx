"use client";

import { useEffect, useMemo, useState } from "react";

type HeroCarouselProps = {
  images: string[];
};

const AUTO_ADVANCE_MS = 2800;

export function HeroCarousel({ images }: HeroCarouselProps) {
  const imageCount = images.length;
  const [position, setPosition] = useState(imageCount);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [timerResetKey, setTimerResetKey] = useState(0);

  const loopedImages = useMemo(() => [...images, ...images, ...images], [images]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTransitionEnabled(true);
      setPosition((current) => current + 1);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [timerResetKey]);

  const moveTo = (direction: -1 | 1) => {
    setTransitionEnabled(true);
    setPosition((current) => current + direction);
    setTimerResetKey((current) => current + 1);
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
      <div className="hero-frame">
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
        <div>
          <span>Bangalore stories</span>
          <small>Three frames, one rhythm</small>
        </div>
        <div className="gallery-buttons">
          <button type="button" onClick={goPrev} aria-label="Show previous wedding image">
            Previous
          </button>
          <button type="button" onClick={goNext} aria-label="Show next wedding image">
            Next
          </button>
        </div>
      </div>
    </>
  );
}
