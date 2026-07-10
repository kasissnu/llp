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
  const featureImage = testimonials[0]?.image ?? "";
  const featureImageAlt = testimonials[0] ? `${testimonials[0].name} wedding` : "Wedding testimonial";

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section className="kind-words" aria-label="Kind words">
      <div className="testimonial-frame">
        <div className="testimonial-image-card">
          <img src={featureImage} alt={featureImageAlt} loading="lazy" decoding="async" />
        </div>
        <div className="testimonial-copy" key={active.name}>
          <span className="quote-mark" aria-hidden="true">
            "
          </span>
          <p className="section-label">Words from the day</p>
          <h2>{active.title}</h2>
          <p>{active.quote}</p>
          <span className="testimonial-name">{active.name}</span>
        </div>
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
