"use client";

import { useEffect, useState } from "react";

export default function IntroAnimation() {
  const [show, setShow] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => {
      setLeaving(true);
    }, 4800);

    const removeTimer = window.setTimeout(() => {
      setShow(false);
    }, 5500);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div className={`rpIntro ${leaving ? "rpIntroLeaving" : ""}`}>
      <div className="calendarIntro">

        <div className="calendarGlow" />

        <div className="calendarIcon">
          <div className="calendarRings">
            <span />
            <span />
          </div>

          <div className="calendarTop" />

          <div className="calendarBody">
            <span />
            <span className="orangeCell orangeOne" />
            <span />

            <span />
            <span className="orangeCell orangeTwo" />
            <span />

            <span />
            <span className="orangeCell orangeThree" />
            <span />
          </div>
        </div>

        <div className="introBrand">
          <h1>
            Roster<span>Pal</span>
          </h1>

          <p>Plan your shifts. Own your time.</p>
        </div>

      </div>
    </div>
  );
}