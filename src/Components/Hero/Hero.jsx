import React from 'react';
import cook from './cook.jpeg';

const Hero = () => {
    return (
        <section className="relative max-w-7xl mx-auto px-4 mt-4  ">

            <div className="relative">
                <img
                    src={cook}
                    alt="cooking"
                    className="w-full rounded-2xl object-cover aspect-video md:aspect-12/5"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 rounded-2xl flex flex-col justify-center items-center text-center px-4 md:px-10">


                    <h1 className="text-xl sm:text-2xl md:text-5xl lg:text-6xl text-white font-bold mb-2 md:mb-4">
                        Master the Art of Cooking
                    </h1>


                    <p className="text-xs sm:text-sm md:text-xl text-gray-200 mb-3 md:mb-6 max-w-2xl">
                        Explore exclusive recipes, expert techniques, and culinary inspiration from world-class chefs.
                    </p>


                    <div className="flex flex-wrap justify-center gap-3">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium md:font-semibold py-2 md:py-3 px-4 md:px-8 rounded-full text-sm md:text-lg transition">
                            Start Cooking Now
                        </button>

                        <button className="border-2 border-white text-white font-medium md:font-semibold py-2 md:py-3 px-4 md:px-8 rounded-full text-sm md:text-lg hover:bg-white hover:text-black transition">
                            Our Feedback
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;