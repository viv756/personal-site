import about from "../assets/about.svg";

const About = () => {
  return (
    <div className="min-h-[700px] py-2 sm:py-0">
      <div className="container flex items-center pt-14">
        <div className="grid grid-cols-1 xl:grid-cols-2 justify-items-center sm:pr-14">
          <div className="ml-4">
            <img src={about} alt="" className="w-full max-w-[500px] max-h-[572px]" />
          </div>
          <div className="flex flex-col ">
            <h1 className="sm:text-5xl text-4xl font-sora sm:mt-5 mt-14">
              About <span className="font-bold">Me</span>
            </h1>
            <div className="mt-9 text-md space-y-6 text-zinc-500 font-sora">
              <p>
                I am a self-taught MERN stack developer passionate about building high-performance
                web applications. My journey began with a curiosity for coding and a determination
                to master MongoDB, Express.js, React, and Node.js. Through self-study, hands-on
                projects, and problem-solving, I have honed my skills in creating efficient and
                scalable full-stack solutions.
              </p>
              <p>
                I began my journey as My self-taught background has instilled in me a strong sense
                of discipline and a commitment to continuous improvement. I pride myself on writing
                clean, maintainable code . Collaboration is key to my approach, and I enjoy working
                with cross-functional teams to deliver solutions that meet technical requirements
                and enhance user satisfaction.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new technologies and collaborating with
                fellow developers to stay ahead of the curve. I believe in the power of technology
                to transform industries and improve lives. I am excited to collaborate on projects
                that push the boundaries of what is possible and make a meaningful impact. Let's
                build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
