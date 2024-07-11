import React from "react";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";

const Experiance = () => {
  return (
    <div className="w-full min-h-[956px] bg-black">
      <div className="container py-10">
        <div className="py-5">
          <h1 className="text-white text-center font-sora sm:text-5xl text-4xl">
            My <span className=" font-bold">Experience</span>{" "}
          </h1>
          <div className="flex flex-col gap-8 my-15 xl:p-20 py-14 ">
            <div className="border border-gray-500 rounded-xl sm:p-9 p-5 ">
              <div className="flex items-center gap-8">
                <FaReact color="#61DBFB" size={30} className="hidden sm:block" />
                <FaReact color="#61DBFB" size={45} className="sm:hidden" />
                <h1 className="text-white text-xl font-sora font-semibold">
                  Project-Based Learning with React.js
                </h1>
              </div>
              <div className="mt-7">
                <p className="text-zinc-300 font-sora">
                  As part of a self-directed learning process, I developed numerous web
                  applications, focusing on creating real-world applications to reinforce my
                  understanding of React.js concepts. I implemented features such as dynamic data
                  rendering, state management, and component-based architecture, and enhanced my
                  proficiency in using React Hooks, Context API, and other modern React libraries.
                  Additionally, I practiced integrating RESTful APIs to fetch and display data
                  dynamically, and gained experience with tools and best practices in version
                  control (Git) and project management.
                </p>
              </div>
            </div>
            <div className="border border-gray-800 rounded-xl sm:p-9 p-5 bg-zinc-800">
              <div className="flex items-center gap-8">
                <FaNodeJs color="#8CC84B" size={30} className="hidden sm:block" />
                <FaNodeJs color="#8CC84B" size={45} className="sm:hidden" />
                <h1 className="text-white text-xl font-sora font-semibold">
                  Self-Directed Learning and Node.js Development
                </h1>
              </div>
              <div className="mt-7">
                <p className="text-zinc-300 font-sora">
                  Through self-directed learning, I developed multiple backend applications to
                  deepen my understanding of Node.js concepts. I focused on server-side logic,
                  RESTful API development, and database integration using Express.js. My skills
                  expanded in asynchronous programming, middleware usage, and modular code structure
                  within Node.js environments. Additionally, I gained practical experience with
                  MongoDB and other databases, and familiarized myself with essential tools like npm
                  for package management.
                </p>
              </div>
            </div>
            <div className="border border-gray-500 rounded-xl sm:p-9 p-5 ">
              <div className="flex items-center gap-8">
                <SiMongodb color="#4FA940" size={30} className="hidden sm:block" />
                <SiMongodb color="#4FA940" size={45} className="sm:hidden" />
                <h1 className="text-white text-xl font-sora font-semibold">
                  Deep Dive into MongoDB for Backend Development
                </h1>
              </div>
              <div className="mt-7">
                <p className="text-zinc-300 font-sora">
                  I developed several backend applications to deepen my understanding of MongoDB and
                  its practical application. I focused on designing database schemas, implementing
                  CRUD operations, and optimizing queries for performance. Leveraging frameworks
                  like Mongoose, I enhanced my proficiency in schema validation, middleware usage,
                  and managing relationships between data models. Additionally, I gained practical
                  experience in using MongoDB Atlas for cloud-based deployments and familiarized
                  myself with tools like Compass for database management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiance;
