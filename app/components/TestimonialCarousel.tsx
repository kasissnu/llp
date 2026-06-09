"use client";

import { useState } from "react";

type Testimonial = {
  title: string;
  quote: string;
  name: string;
  image: string;
};

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
};

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section className="kind-words" aria-label="Kind words">
      <div className="testimonial-frame" key={active.name}>
        <div className="testimonial-image-card">
          <img src={active.image} alt={`${active.name} wedding`} />
          <div className="testimonial-seal" aria-hidden="true">
            <span>LL</span>
          </div>
        </div>
        <h2>{active.title}</h2>
        <p>{active.quote}</p>
        <span className="testimonial-name">{active.name}</span>
      </div>
      <div className="testimonial-arrows" aria-label="Testimonial navigation">
        <button type="button" onClick={showPrevious} aria-label="Show previous testimonial">
          ←
        </button>
        <button type="button" onClick={showNext} aria-label="Show next testimonial">
          →
        </button>
      </div>
    </section>
  );
}
