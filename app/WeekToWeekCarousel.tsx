"use client";

import Image from "next/image";
import { useState } from "react";

const screens = [
  {
    src: "/rosterpal-week-to-week-ai.jpg",
    alt: "RosterPal Upload Roster with AI screen",
    label: "Upload",
  },
  {
    src: "/rosterpal-week-to-week-review.jpg",
    alt: "RosterPal AI roster import review screen",
    label: "Review",
  },
  {
    src: "/rosterpal-week-to-week-confirm.jpg",
    alt: "RosterPal confirm roster dates screen",
    label: "Confirm",
  },
];

export default function WeekToWeekCarousel() {
  const [active, setActive] = useState(1);

  const previous = () => {
    setActive((current) => (current + screens.length - 1) % screens.length);
  };

  const next = () => {
    setActive((current) => (current + 1) % screens.length);
  };

  const positionFor = (index: number) => {
    const offset = (index - active + screens.length) % screens.length;
    if (offset === 0) return "center";
    if (offset === 1) return "right";
    return "left";
  };

  return (
    <div
      className="weekToWeekVisual weekToWeekCarousel"
      aria-label="RosterPal Week-to-Week AI roster reading screens"
    >
      <div className="rosterTypeGlow rosterTypeGlowBlue" />

      <button
        type="button"
        className="wwCarouselArrow wwCarouselArrowLeft"
        onClick={previous}
        aria-label="Show previous Week-to-Week screen"
      >
        ‹
      </button>

      <div className="wwCarouselStage">
        {screens.map((screen, index) => {
          const position = positionFor(index);
          return (
            <button
              type="button"
              key={screen.src}
              className={`wwCarouselPhone wwCarouselPhone-${position}`}
              onClick={() => setActive(index)}
              aria-label={`Show ${screen.label} screen`}
              aria-current={position === "center" ? "true" : undefined}
            >
              <Image
                src={screen.src}
                alt={screen.alt}
                width={930}
                height={1932}
                className="rosterMiniImage"
              />
              <span>{screen.label}</span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        className="wwCarouselArrow wwCarouselArrowRight"
        onClick={next}
        aria-label="Show next Week-to-Week screen"
      >
        ›
      </button>

      <div className="wwCarouselDots" aria-label="Week-to-Week screen selector">
        {screens.map((screen, index) => (
          <button
            type="button"
            key={screen.label}
            className={index === active ? "active" : ""}
            onClick={() => setActive(index)}
            aria-label={`Show ${screen.label} screen`}
            aria-current={index === active ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
