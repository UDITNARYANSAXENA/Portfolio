import React from "react";

function About() {
  return (
    <>
      <div
        name="About"
        className="max-w-screen2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Udit, a passionate Web developer with a keen eye for MERN
          Stack . With a background in Computer Science, I strive to create
          impactful and visually stunning web Software solutions that leave a
          lasting impression.
        </p>
        <br />
        <h1 className="text-amber-900 font-semibold text-xl"> Education </h1>
        <ol>
          <li>Bachelor of Technology from Dr. A.P.J. ABDUL KALAM TECHNICAL TECHNICAL UNIVERSITY , LUCKNOW , 2025 </li>
         <li> Intermediate (10+2) from Central Board of Secondary Education , Delhi , 2021 </li>
         <li> High School from Central Board of Secondary Education , Delhi , 2021 </li>
        </ol>
        <br />
        <h1 className="text-amber-900 font-semibold text-xl"> Skills </h1>
        <ul>
          <li>Proficient in C++ and Javascript</li>
           <li>Experienced with HTML , CSS and Javascript</li> 
          <li>Excellent problem-solving skills Effective communicator and
          collaborator</li>
        </ul>
      </div>
    </>
  );
}

export default About;
