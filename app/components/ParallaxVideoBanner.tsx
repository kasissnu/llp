"use client";

import { useEffect, useRef } from "react";

type ParallaxVideoBannerProps = {
  videoSrc: string;
  poster: string;
};

export function ParallaxVideoBanner({ videoSrc, poster }: ParallaxVideoBannerProps) {
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
      section.style.setProperty("--video-reveal-y", `${(-top * 0.85).toFixed(2)}px`);
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
    <section className="video-parallax-shell" id="videography" ref={sectionRef}>
      <div className="video-banner">
        <video
          className="video-banner-media"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="video-banner-copy">
          <p className="section-label">Wedding films</p>
        </div>
        <a className="is-disabled-link video-banner-link-disabled" href={undefined} aria-disabled="true" tabIndex={-1}>
          See the films
        </a>
      </div>
    </section>
  );
}
