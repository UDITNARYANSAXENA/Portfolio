import React from 'react'
import javascript from "../../public/Javascript.png";
import html from "../../public/html.png";
import css from "../../public/css.jpeg";
import node from "../../public/node.png";
import react from "../../public/react.jpeg";
import express from "../../public/express.jpeg";
import cpp from "../../public/cpp.png";
import mongo from "../../public/mongo.png";

function Experience() {
    const cardItems = [
        {
            id:1,
            logo:html,
            name:"HTML"
        },
        {
            id:2,
            logo:css,
            name:"CSS"
        },
        {
            id:3,
            logo:javascript,
            name:"Javascript"
        },
        {
            id:4,
            logo:node,
            name:"NodeJs"
        },
        {
            id:5,
            logo:react,
            name:"React Js"
        },
        {
            id:6,
            logo:express,
            name:"Express"
        },
        {
            id:7,
            logo:mongo,
            name:"MongoDb"
        },
        {
            id:8,
            logo:cpp,
            name:"C++"
        },
       
    ]
  return (
    <div name="Experience" className="max-w-screen2xl container mx-auto px-4 md:px-20 my-20 mt-10">
      <div>
      <h1 className='text-3xl font-bold mb-5'>Technical Skills</h1>
      <p className='font-semibold'> I've more then 1 year of 
      experience in below technologies</p>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
        {
            cardItems.map(({id , logo, name})=>(
                <div>
                    <div className='flex flex-col items-center justify-center border-[2px] rounded-full p-1 hover:scale-105 duration-300 space-y-7 mt-7' key={id}>
                    <img src={logo} className='w-[120px] rounded-lg mt-6' alt="" />
                    <div>
                        <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                        </div>
                    </div>
                </div>
            ))
        }
      </div>
      </div>
    </div>
  )
}

export default Experience;
