import React, { useEffect, useRef } from "react";
import "./style.css";

const SkillBar = ({ skill }) => {
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger the animation
            barRef.current.style.width = `${skill.level}%`;
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the bar is in view
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [skill.level]);

  return (
    <div className="skill-bar">
      <span className="skill-name">{skill.name}</span>
      <div className="progress">
        <div ref={barRef} className="progress-fill bg-white">
          {skill.level}%
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
