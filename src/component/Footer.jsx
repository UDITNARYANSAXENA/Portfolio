import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


function Footer() {
  return (
    <>
    <hr />
    <footer className='py-12 '>
      <div className="max-w-screen2xl container mx-auto px-4 md:px-20">
        <div className='flex flex-col items-center justify-center'>
          <div className='flex space-x-4'>
            
          <a href="https://www.facebook.com/profile.php?id=100064399994087" target="_blank">
            <FaSquareFacebook size={24} /></a>
            <a href="https://x.com/UditNarayansax2" target='_blank'>
            <FaTwitter size={24}/></a>
            <a href="https://www.instagram.com/udit_narayan_saxena/" target='_blank'>
            <FaInstagramSquare size={24} /></a>
            <a href="https://www.linkedin.com/in/udit-narayan-saxena/" target="_blank">
            <FaLinkedin size={24} /></a>
          </div>
          <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col item-center'>
            <p className='text-sm'>
              &copy; Udit Narayan Saxena . All right reserved.
            </p>
          </div>
        </div> 

      </div>
    </footer>
    </>
  )
}

export default Footer
