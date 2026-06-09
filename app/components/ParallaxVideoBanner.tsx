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

    const updateParallax = () => {
      frame = 0;

      const viewportHeight = window.innerHeight || 1;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const triggerStart = sectionTop - viewportHeight;
      const triggerEnd = sectionTop + sectionHeight;
      const triggerDistance = Math.max(1, triggerEnd - triggerStart);
      const progress = (window.scrollY - triggerStart) / triggerDistance;
      const clamped = Math.min(1, Math.max(0, progress));
      const mediaOffset = clamped * 20 - 10;

      section.style.setProperty("--video-parallax-y", `${mediaOffset.toFixed(2)}%`);
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
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
          <p className="script">Explore</p>
          <h2>Videography</h2>
        </div>
        <p className="video-banner-kicker">unfiltered memories</p>
        <a href="#portfolio">View films</a>
      </div>
    </section>
  );
}
