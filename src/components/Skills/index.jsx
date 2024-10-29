import React from "react";
import SkillBar from "../SkillsBar";
import "./style.css";

const skillsData = [
  { name: "CSS", level: 90 },
  { name: "Tailwind CSS", level: 85 },
  { name: "React.js", level: 80 },
  { name: "JavaScript", level: 85 },
  { name: "Node.js", level: 78 },
  { name: "MongoDB", level: 75 },
  { name: "Python", level: 80 },
  { name: "SQLite", level: 80 },
];

const Skills = () => {
  return (
    <div className="skills-container">
      {skillsData.map((skill, index) => (
        <SkillBar key={index} skill={skill} />
      ))}
    </div>
  );
};

export default Skills;
