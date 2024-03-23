import Skills from "./Skills";
import React from 'react'

function SkillList() {
  const skills = [
    { skill: "React", Level: "intermidate", color: "blue" },
    { skill: "HTML+CSS", Level: "Advanced", color: "orange" },
    { skill: "JavaScript", Level: "intermidate", color: "yellow" },
    { skill: "Django", Level: "beginner", color: "orangered" },
    { skill: "Flutter", Level: "beginner", color: "red" },
  ];
  return (
    <div className="skill-list">
      {skills.map((skill,index) => (
        <Skills
          
          skill={skill.skill} level={skill.Level} color={skill.color}
          key={index}
        />
      ))}

      {/* <Skills /> */}
    </div>
  );
}

export default SkillList;
