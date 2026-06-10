"use client";

import { useEffect, useRef } from "react";

type ParallaxBookingBannerProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
  href?: string;
  label?: string;
  image?: string;
};

const defaultImage =
  "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1800&q=85";

export function ParallaxBookingBanner({
  eyebrow = "Now booking Bangalore celebrations",
  title = "Tell us where the day begins. We will follow the lines from there.",
  body = "Photography, films, or both. Built around your people and your pace.",
  href = "/book",
  label = "Book Leading Lines Photography",
  image = defaultImage,
}: ParallaxBookingBannerProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;

    const updateReveal = () => {
      frame = 0;
      const { top } = section.getBoundingClientRect();
      section.style.setProperty("--booking-reveal-y", `${(-top * 0.72).toFixed(2)}px`);
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateReveal);
    };

    updateReveal();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section className="booking-banner" id="booking" ref={sectionRef}>
      <img className="booking-banner-media" src={image} alt="" aria-hidden="true" />
      <p className="section-label">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{body}</p>
      <a href={href} aria-label={label}>
        →
      </a>
    </section>
  );
}
