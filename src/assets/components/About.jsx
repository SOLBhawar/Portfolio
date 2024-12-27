import React from "react";
import aboutimg from "/src/assets/aboutimg.jpeg";

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">

        <div className="mt-4 md:mt-0 text-left flex py-6 md:py-0">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 pri-col">About Me</h2>
            <p className="text-base lg:text-lg">
            Electronics and Communication Engineering student seeking a Development role to apply programming skills and passion for technology in building innovative software solutions.
            </p>
          </div>
        </div>
        <img className="mx-auto md:rounded-full py-8 md:py-0" src={aboutimg} width={300} height={300}/>

      </div>
    </div>
  );
};

export default About;
