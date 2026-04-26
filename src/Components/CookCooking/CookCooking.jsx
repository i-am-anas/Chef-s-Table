import React from 'react';

const CookCooking = ({ wtc, deletewtc, cc, clearAll }) => {
    const totalWTC = wtc.length;
    const totalCC = cc.length;
    const totalTime = cc.reduce(
        (sum, item) => sum + parseInt(item.preparing_time),
        0
    );

    const totalCalories = cc.reduce(
        (sum, item) => sum + parseInt(item.calories),
        0
    );
    return (
        <div className='w-full '>
            <section className='w-full min-h-[120px] mt-4'>
                <h1 className='font-bold text-2xl flex justify-center'>Want to Cook: {totalWTC} </h1>
                <div className="w-[92%] h-px bg-gray-300 mt-4 ml-6 mr-2"></div>
                <section className='grid grid-cols-4 mt-4'>
                    <h4 className='ml-8'>Name</h4>
                    <h4 className='ml-8'>Time</h4>
                    <h4 className='ml-4'>Calories</h4>
                    <button className='mr-2'>State</button>
                </section>
                <section className='w-[97%] min-h-[20px] ml-2  mt-2'>
                    {
                        wtc.map((item) => (
                            <div className="grid grid-cols-4 items-center ">
                                <p className='ml-2 min-h-[10px]'>{item.recipe_name}</p>
                                <p className='ml-2 min-h-[10px]'>{item.preparing_time}</p>
                                <p className='ml-1 min-h-[10px]'>{item.calories}</p>
                                <button onClick={() => deletewtc(item.recipe_id)} className="bg-amber-400 py-1 rounded-full text-sm font-semibold cursor-pointer mt-2 min-h-[25px]">
                                    Start
                                </button>
                            </div>
                        ))
                    }
                </section>
            </section>

            <section className=' w-full min-h-[120px] mt-8'>
                <h1 className='font-bold text-2xl flex justify-center'>Currently Cooking: {totalCC} </h1>
                <div className="w-[92%] h-px bg-gray-300 mt-4 ml-6 mr-2"></div>
                <section className='grid grid-cols-3 items-center '>
                    <h4 className='ml-8'>Name</h4>
                    <h4 className='ml-4'>Time</h4>
                    <h4 className='ml-4'>Calories</h4>
                    <button></button>
                </section>
                <section className='w-full min-h-[20px]  mt-2'>
                    {
                        cc.map((item) => (
                            <div className="grid grid-cols-3 items-center mt-4">
                                <p className='ml-4 min-h-[10px]'>{item.recipe_name}</p>
                                <p className='ml-2 min-h-[10px]'>{item.preparing_time}</p>
                                <p className='ml-1 min-h-[10px]'>{item.calories}</p>

                            </div>
                        ))
                    }
                </section>
            </section>
            <div className="w-[92%] h-px bg-gray-300 mt-4 ml-6 mr-2"></div>
            <section className='grid grid-cols-3 items-center mt-4'>
                <h4 className='ml-12'></h4>
                <h1 className=''>Total Time</h1>
                <h1 className=''>Total Calories</h1>
            </section>

            <section className='grid grid-cols-3 items-center mt-4'>
                <h4 className='ml-12'></h4>
                <h1 className=''>{totalTime} Minutes</h1>
                <h1 className=''>{totalCalories} Calories</h1>
            </section>


            <section className='flex justify-end items-end'>
                <button onClick={clearAll}  className='bg-amber-200-400 border rounded-2xl cursor-pointer px-2'>Reset</button>
            </section>
        </div>


    );
};

export default CookCooking;