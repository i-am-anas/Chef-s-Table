import React from 'react';
import { IoMdTime } from "react-icons/io";
import { FaRunning } from "react-icons/fa";


const Recipe = ({ recipe, movetowtc }) => {
    const { recipe_name, image, short_description, ingredients, preparing_time, calories } = recipe;

    return (
        <div className='w-full ml-5 mt-2 mb-8 border rounded-2xl'>
            <img src={image} alt={recipe_name} className=' w-[90%] h-[200px] object-cover rounded-2xl ml-2 md:ml-5 mt-5' />
            <section className="mt-2 font-[Noto Sans] ml-5">
                <h1 className=" text-xl font-bold">
                    {recipe_name}
                </h1>
                <p className='font-normal text-md mt-1 min-h-[45px]'>{short_description}</p>
            </section>

            <div className="w-[92%] h-px bg-gray-300 my-4 mt-8 ml-5"></div>


            <section className='font-bold text-lg ml-5'>Ingredients  : {ingredients.length}</section>
            <ul className="list-disc pl-5 text-sm mt-2 ml-5">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            <div className="w-[92%] h-px bg-gray-300 my-4 mt-8 ml-5"></div>

            <section className='grid grid-cols-2 md:gap-0 gap'>
                <section className='flex justify-center items-center'>
                    <IoMdTime className='md:mr-1' />
                    <p>{preparing_time}</p>
                </section>

                <section className='flex justify-center items-center'>
                    <FaRunning className='md:mr-1' />
                    <p>{calories}</p>
                </section>
            </section>



            <section className='mt-6 flex justify-center ml-5 pb-4'>
                <button onClick={() => movetowtc(recipe)} className="bg-orange-300 text-black font-semibold py-2 px-6 mr-2 rounded-full text-lg transition cursor-pointer">
                    Want to Cook
                </button>
            </section>
        </div>
    );
};

export default Recipe;