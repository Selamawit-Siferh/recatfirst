function Skills({skill,level,color}) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermidate" && "👍"}
        {level === "Advanced" && "💪"}
      </span>
    </div>
  );
}

export default Skills;
