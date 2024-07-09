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
  const skills = [
    {
      id: 1,
      name: "Git",
      icon: <FaGitAlt />,
    },
    {
      id: 2,
      name: "Javascript",
      icon: <SiJavascript />,
    },
    {
      id: 3,
      name: "Nodejs",
      icon: <FaNodeJs />,
    },
    {
      id: 4,
      name: "Typescript",
      icon: <SiTypescript />,
    },
    {
      id: 5,
      name: "React",
      icon: <FaReact />,
    },
    {
      id: 6,
      name: "NextJs",
      icon: <SiNextdotjs />,
    },
    {
      id: 7,
      name: "Express",
      icon: <SiExpress />,
    },
    {
      id: 8,
      name: "SocketIo",
      icon: <SiSocketdotio />,
    },
    {
      id: 9,
      name: "PostgresSql",
      icon: <BiLogoPostgresql />,
    },
    {
      id: 10,
      name: "MongoDB",
      icon: <SiMongodb />,
    },
  ];

  return (
    <div className="py-10">
      <div className="container">
        <div>
          <h1 className="text-center text-6xl font-sora p-3 ">
            My <span className="font-bold">Skills</span>
          </h1>
          <div className="p-2 mt-10 min-h-[500px] w-full sm:gap-16 gap-3 grid grid-cols-2 sm:grid-cols-5 ">
            {skills.map((skill) => (
              <div className="flex flex-col justify-center items-center border-2 border-black h-[210px] rounded-lg">
                <div key={skill.id} className="">
                  <div className="flex justify-center py-2">
                    {React.cloneElement(skill.icon, { size: 50 })}
                  </div>
                  <div className="font-bold font-sora py-2 text-center">{skill.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;