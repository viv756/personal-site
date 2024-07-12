import { Experiances } from "../constants";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";

const icon = {
  react: <FaReact color="#61DBFB" size={30} className="hidden sm:block" />,
  nodejs: <FaNodeJs color="#8CC84B" size={30} className="hidden sm:block" />,
  mongodb: <SiMongodb color="#4FA940" size={30} className="hidden sm:block" />,
};

const iconMobile = {
  react: <FaReact color="#61DBFB" size={45} className="sm:hidden" />,
  nodejs: <FaNodeJs color="#8CC84B" size={45} className="sm:hidden" />,
  mongodb: <SiMongodb color="#4FA940" size={45} className="sm:hidden" />,
};

const Experiance = () => {
  return (
    <div className="w-full min-h-[956px] bg-black">
      <div className="container py-10">
        <div className="py-5">
          <h1 className="text-white text-center font-sora sm:text-5xl text-4xl">
            My <span className=" font-bold">Experience</span>{" "}
          </h1>
          <div className="flex flex-col gap-8 my-15 xl:p-20 py-14 ">
            {Experiances.map((exp) => (
              <div key={exp.id} className="border border-gray-500 rounded-xl sm:p-9 p-5 ">
                <div className="flex items-center gap-8">
                  {icon[exp.skill]}
                  {iconMobile[exp.skill]}
                  <h1 className="text-white text-xl font-sora font-semibold">{exp.title}</h1>
                </div>
                <div className="mt-7">
                  <p className="text-zinc-300 font-sora">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiance;
