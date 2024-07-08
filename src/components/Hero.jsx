import React from "react";
import column from "../assets/column.svg";
import Banner from "../assets/Banner.svg";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";

const Hero = () => {
  const [activeButton, setActiveButton] = React.useState(0);

  const buttons = [
    { icon: <BiLogoFacebookCircle size={30} />, id: 0 },
    { icon: <FaGithub size={30} />, id: 1 },
    { icon: <IoLogoLinkedin size={30} />, id: 2 },
    { icon: <BsInstagram size={30} />, id: 3 },
  ];

  
  return (
    <>
      <div className="py-12 sm:py-0  overflow-hidden">
        <div className="container">
          <div className=" min-h-[700px]  relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center relative z-10 lg:gap-0 gap-9">
              <div className="order-2 lg:order-1 space-y-4">
                <div className="lg:mt-44">
                  <h1 className="text-5xl xl:leading-normal lg:leading-none leading-tight ">
                    <span className="font-sora"> Hello I'am</span>{" "}
                    <span className=" font-sora font-bold">Vivek.</span>
                    <br />
                    <span className="font-sora font-bold ">
                      MERN Stack
                    </span>{" "}
                    <span className="  font-outline-text font-sora font-bold">
                      Developer
                    </span>
                    <br />
                    <span className=" font-sora font-semibold">
                      Based In{" "}
                      <span className=" font-sora font-bold">India</span>
                    </span>
                  </h1>
                </div>

                {/* <h1 className="font-sora text-5xl ">
                <span className="font-bold"> Vivek.</span>{" "}
              </h1>
              <h1 className="text-5xl ">
                <span className="font-bold font-sora">MERN Stack </span>
                <span className=" text-5xl font-outline-text font-sora font-bold">
                  Developer
                </span>
              </h1>

              <h1 className="text-5xl font-sora font-bold">
                <span> Based On India</span>
              </h1> */}
                <p className=" text-justify">
                  Hello! I'm a self-taught MERN stack developer with a passion
                  for creating dynamic and responsive web applications. I've
                  dedicated myself to mastering MongoDB, Express.js, React, and
                  Node.js, building several projects that showcase my skills. My
                  journey has been driven by curiosity and a love for learright
                  allowing me to stay updated with the latest industry trends
                  and best practices.
                </p>
              </div>

              <div className="order-1  lg:order-2 "> 
                <img
                  src={column}
                  alt=""
                  className="w-[500px]  right-3 bottom-5 lg:w-[800px] lg:h-[596px] sm:hidden"
                />
                <img
                  src={Banner}
                  alt=""
                  className=" xl:right-3 xl:left-[530px] xl:top-8 xl:w-auto hidden sm:block lg:w-[800px] lg:bottom-1 lg:top-20 lg:right-0 lg:left-80 lg:absolute sm:w-[900px] sm:mt-2 xl:mt-0"
                />
              </div>
            </div>
            <div className="flex gap-5 sm:gap-8 xl:mt-[70px] lg:mt-[42px] mt-[45px]">
              {buttons.map((button) => (
                <button
                  key={button.id}
                  type="button"
                  onMouseEnter={() => setActiveButton(button.id)}
                  className={`h-[60px] w-[60px] flex justify-center items-center font-semibold rounded transition-colors duration-300
                      ${
                        activeButton === button.id
                          ? "bg-black text-white"
                          : "border-solid border-2 border-black text-black hover:bg-black hover:text-white"
                      }`}>
                  {button.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

//  className=" right-3 bottom-12 w-auto hidden lg:block  absolute"
