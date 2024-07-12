import React from "react";
import { SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";

const Skills = () => {
  const [skillSelected, setSkillSelected] = React.useState(2);

  const skills = [
    {
      id: 1,
      name: "Git",
      icon: <FaGitAlt size={57} />,
    },
    {
      id: 2,
      name: "JavaScript",
      icon: <SiJavascript size={57} />,
    },
    {
      id: 3,
      name: "Node.js",
      icon: <FaNodeJs size={57} />,
    },
    {
      id: 4,
      name: "TypeScript",
      icon: <SiTypescript size={57} />,
    },
    {
      id: 5,
      name: "React",
      icon: <FaReact size={57} />,
    },
    {
      id: 6,
      name: "Next.js",
      icon: <SiNextdotjs size={57} />,
    },
    {
      id: 7,
      name: "Express.js",
      icon: <SiExpress size={57} />,
    },
    {
      id: 8,
      name: "Socket.IO",
      icon: <SiSocketdotio size={57} />,
    },
    {
      id: 9,
      name: "PostgreSQL",
      icon: <BiLogoPostgresql size={57} />,
    },
    {
      id: 10,
      name: "MongoDB",
      icon: <SiMongodb size={57} />,
    },
  ];

  return (
    <div className="py-10">
      <div className="container">
        <h1 className="text-center sm:text-[50px] text-4xl font-sora p-3 ">
          My <span className="font-bold">Skills</span>
        </h1>
        <div className="p-2 sm:mt-16 mt-11 min-h-[500px] w-full xl:gap-0 gap-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center ">
          {skills.map((skill) => (
            <div key={skill.id}
              className={`flex flex-col justify-center items-center border-2 border-black h-[186px] w-full sm:h-[190px] sm:w-[190px] rounded-[3px] box-border transition-colors duration-300 ${
                skillSelected === skill.id && "bg-black text-white"
              }`}
              onClick={() => setSkillSelected(skill.id)}>
              <div  className="flex flex-col gap-3">
                <div className="flex justify-center py-2">{skill.icon}</div>
                <div className="font-bold font-sora py-2 text-center">
                  {skill.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
