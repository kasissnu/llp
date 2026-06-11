"use client";

import { useState } from "react";

type CoupleStory = {
  title: string;
  place: string;
  image: string;
};

type PortfolioCarouselProps = {
  stories: CoupleStory[];
};

export function PortfolioCarousel({ stories }: PortfolioCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleStories = [-1, 0, 1].map((offset) => {
    const index = (activeIndex + offset + stories.length) % stories.length;

    return {
      story: stories[index],
      position: offset === 0 ? "active" : offset < 0 ? "previous" : "next",
    };
  });

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + stories.length) % stories.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % stories.length);
  };

  return (
    <section className="portfolio-carousel" aria-label="Couples we have photographed">
      <div className="portfolio-carousel-title">
        <h1>Portfolio</h1>
      </div>
      <div className="portfolio-carousel-stage">
        {visibleStories.map(({ story, position }) => (
          <article className={`portfolio-carousel-card ${position}`} key={`${story.title}-${position}`}>
            <img
              src={story.image}
              alt={`${story.title} wedding by Leading Lines Photography`}
              decoding="async"
            />
            <div>
              <h2>{story.title}</h2>
              <p>{story.place}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="portfolio-carousel-arrows">
        <button type="button" onClick={showPrevious} aria-label="Show previous couple">
          ←
        </button>
        <span>{String(activeIndex + 1).padStart(2, "0")} / {String(stories.length).padStart(2, "0")}</span>
        <button type="button" onClick={showNext} aria-label="Show next couple">
          →
        </button>
      </div>
    </section>
  );
}
