import React from "react";
import HEROPHTOO from "/src/assets/HEROPHTOO.jpeg";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-10 bg-black">
        <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
          <img src={HEROPHTOO} alt="imge" className="rounded-full" />
        </div>

        <div className="col-span-2 px-5 my-auto">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
            <span className="text-red-400">I'm a</span> <br />
            <TypeAnimation
              sequence={[
                "Frontend Dev",
                1000,
                "Webdesigner",
                1000,
                "Consultant",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-white sm:text-lg my-6 lg:text-xl">
            in my final year and actively looking for an internship.
          </p>

          <div className="my-1 grid grid-cols-2 md:grid-cols-10 xl:grid-cols-12 items-center">
            <div className="col-span-1 md:col-span-4 xl:grid-cols-4">

            <a
              href="https://drive.google.com/file/d/1FQ1aJEie7oD0T9AViV8QHLvpZK8OduIJ/view?usp=sharing"
              className="px-6 py-3 rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"
              >
              Download Resume
            </a>
              </div>
            <div className=" col-span-1 md:col-span-4 xl:col-span-8 mr-4 flex items-center justify-center border border-gray-40 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl w-[50px] h-[40px]">
              {/* bg-gradient-to-br from-orange-500 to-pink-500 text-white */}
              <a href="https://www.linkedin.com/in/bhawar-syal-5ab224251/" className=" rounded-xl mx-auto  text-white my-auto ">
                
              <FaLinkedin className=" text-xl  text-left"/>
              </a>

              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
