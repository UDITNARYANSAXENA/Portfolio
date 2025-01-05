import React from "react";
import pic from "../../public/main profile.jpg";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-32 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In my Feed </span>
            <div className="flex space-x-2 text-2xl md:text-4xl">
              <h1>Hello , I'm a </h1>
              {/* <span > Developer</span>*/}
              <ReactTyped
                className="text-blue-700 font-bold"
                strings={["Coder", "Developer"]}
                typeSpeed={90}
                backSpeed={70}
                loop={true}
              />
            </div>
            <br />
            <p className="text-justify">
              I am pursuing B.tech from Computer Science and Engineering at Dr.
              A.P.J. ABDUL KALAM TECHNICAL UNIVERSITY ,LUCKNOW , U.P. ,
              anticipated to graduate in JULY 2025. My experience includes
              internships roles that have honed my skills in Web Development.
              Additionally, I possess proficiencies in Web develoment and have
              achieved notable successes in leadership roles.
            </p>
            <br />
            {/*social media icons*/}
            <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center">
              <div className="space-y-2 ">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=100064399994087"
                      target="_blank"
                    >
                      <FaSquareFacebook className="text-2xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/udit_narayan_saxena/"
                      target="_blank"
                    >
                      <FaInstagramSquare className="text-2xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/udit-narayan-saxena/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/UDITNARYANSAXENA"
                      target="_blank"
                    >
                      <FaGithubSquare className="text-2xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold ">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <IoLogoNodejs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 ml-8 md:mt-20px mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px] w-[300px] h-[300px] items-center justify-center mx-12"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
