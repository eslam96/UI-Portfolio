import { urlFor, client } from "../../client";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

import { useState, useEffect } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const skillsQuery = "*[_type == 'skills']";
    const experiencesQuery = "*[_type == 'experiences']";

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });

    client.fetch(experiencesQuery).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      {/* skills & experiences container */}
      <div className="app__skills-container">
        {/* skills list */}
        <motion.div className="app__skills-list">
          {/* mapping through skills array */}
          {skills.map((skill) => (
            // skill item motion div
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* experiences list */}
        <motion.div className="app__experiences-list">
          {/* mapping through experiences array */}
          {experiences.map((exp) => (
            // experience item motion div
            <motion.div className="app__exp-item" key={exp.year}>
              {/* experinece item - year div */}
              <div className="app__exp-item-year">
                <p className="bold-text">{exp.year}</p>
              </div>

              {/* experience item - works list */}
              <motion.div className="app__exp-item-works">
                {/* mapping through works array of each experinece item */}
                {exp.works.map((work) => (
                  <>
                    {/* work item motion div */}
                    <motion.div
                      className="app__exp-work"
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      data-tooltip-id={work.company}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      id={work.company}
                      effect="solid"
                      arrowColor="#fff"
                      className="work-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
