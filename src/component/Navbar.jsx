import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import pic from '../../public/main profile.jpg';
import { Link } from 'react-scroll';

function Navbar() {
    const [menu,setmenu] = useState(false)
    const navitems =[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Projects"
        },
        {
            id:4,
            text:"Certification"
        },
        {
            id:5,
            text:"Experience"
        },
        {
            id:6,
            text:"Contact"
        },
    
    
    ]
  return (
    <>
    <div className='max-w-screen2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white cover'>
        <div className='flex justify-between items-center h-16'>
            <div className='flex space-x-2'>
                <img src={pic} className='h-12 w-12 rounded-full' alt="" />
                <h1 className='font-semibold text-xl cursor-pointer'>Udit Narayan Saxena
                    <p className='text-sm'>Web Developer</p>
                </h1>
            </div>

            <div></div>
            <ul className='hidden md:flex space-x-7'>
                {
                    navitems.map(({id,text})=>(
                        <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>
                         <Link to={text}
                         smooth={true}
                         duration={500}
                         offset={70}
                         activeClass='active'>
                            {text}</Link>
                            </li>
                    ))
                }
            </ul>
           <div className="md:hidden"
           onClick={()=>setmenu(!menu)}>{menu?<IoClose size={24} />:<FiMenu size={24}/>} </div>
        </div>
        {
                menu && (
                    <div className='bg-white'>
            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
             {
                    navitems.map(({id,text})=>(
                        <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>
                            <Link 
                             onClick={()=>setmenu(!menu)}to={text}
                         smooth={true}
                         duration={500}
                         offset={70}
                         activeClass='active'>
                            {text}</Link>
                    
                        </li>
                    ))
                }
           
            </ul>
        </div>

                    
                )
            }
            
        
    </div>
    </>
  );
}

export default Navbar
