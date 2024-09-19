import React from 'react'
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const ResponsiveNavbar = () => {
  return (
    <div className='bg-slate-500 p-4'>
        <div className='flex justify-between items-center max-w-[1240] border border-black mx-auto'>
                <div className='text-white font-extrabold text-4xl'>
                    Logo
                </div>
                <FiMenu className='text-white text-2xl md:hidden block'/>
                {/* <IoClose className='text-white text-2xl md:hidden'/> */}

                <ul className='hidden md:flex justify-around gap-5'>
                    <li>
                        HOme
                    </li>
                    <li>
                        Apponitment system
                    </li>
                    <li>
                        HMIS
                    </li>
                    <li>
                        Business Software
                    </li>
                    <li>
                        Cards
                    </li>
                </ul>

                {/* Responsive */}
                <ul className='md:hidden w-full fixed bg-black left-0 top-[138px] text-white'>
                    <li className='p-3'>
                        HOme
                    </li>
                    <li className='p-3'>
                        Apponitment system
                    </li>
                    <li className='p-3'>
                        HMIS
                    </li>
                    <li className='p-3'>
                        Business Software
                    </li>
                    <li className='p-3'>
                        Cards
                    </li>
                </ul>
        </div>
    </div>
  )
}

export default ResponsiveNavbar