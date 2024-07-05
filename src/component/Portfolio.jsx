import React from 'react'
import javascript from "../../public/Javascript.png";
import html from "../../public/html.png";
import css from "../../public/css.jpeg";
import node from "../../public/node.png";
import react from "../../public/react.jpeg";
import express from "../../public/express.jpeg";
import cpp from "../../public/cpp.png";
import mongo from "../../public/mongo.png";

function Portfolio() {
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
    <div name="Projects" className="max-w-screen2xl container mx-auto px-4 md:px-20 my-20 mt-10">
      <div>
      <h1 className='text-3xl font-bold mb-5'>Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
        {
            cardItems.map(({id , logo, name})=>(
                <div>
                    <div className='md:w-[250px] md:h[250px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300 space-y-7 mt-5' key={id}>
                    <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
                    <div>
                        <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                        <p className='px-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, dolorum?</p>
                    </div>
                    <div className='px-6 py-4 space-x-4 justify-around'>
                        <button className='bg-blue-500 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded'>Video</button>
                        <button className='bg-green-500 hover:bg-green-800 text-white font-bold px-4 py-2 rounded'>Source</button>
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

export default Portfolio
