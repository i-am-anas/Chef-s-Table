import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return (
        <div className=''>
            <section className='w-full h-20 flex  flex-row items-center justify-between  px-2 md:px-20 py-2'>
                <h1 className='font-medium text-xl md:font-bold md:text-4xl'>Recipe Calories</h1>
                <section className=' flex gap-4 md:gap-7 ml-4 mr-4'>
                    <button className='cursor-pointer'>Home</button>
                    <button className='cursor-pointer'>Recipes</button>
                    <button className='cursor-pointer'>About</button>
                    <button className='cursor-pointer'>Search</button>
                </section>
                <section className=' flex px-2 gap-2 py-2'>
                    <button className='bg-slate-200 w-20 md:w-52 h-8 rounded-xl flex justify-center items-center gap-2 cursor-pointer' ><IoMdSearch /> Search</button>
                    <button className='bg-orange-400 rounded-2xl w-8 flex flex-col justify-center items-center cursor-pointer'> <  CgProfile /></button>
                </section>
            </section>
        </div>
    );
};

export default Navbar;