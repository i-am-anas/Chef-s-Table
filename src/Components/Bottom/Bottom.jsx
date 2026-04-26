import React from 'react';
import { useEffect, useState } from "react";
import Recipe from '../Recipe/Recipe';
import CookCooking from '../CookCooking/CookCooking';


const Bottom = () => {

    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('/Recipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])



    //Initialize wtc and cc from localStorage, Runs only once when component mounts ,Looks inside browser storage for key "wtc"
    const [wtc, setWtc] = useState(() =>
        JSON.parse(localStorage.getItem('wtc')) || []
    );

    const [cc, setCc] = useState(() =>
        JSON.parse(localStorage.getItem('cc')) || []
    );

    //Save wtc and cc whenever it changes
    useEffect(() => {
        localStorage.setItem('wtc', JSON.stringify(wtc));
    }, [wtc]);

    useEffect(() => {
        localStorage.setItem('cc', JSON.stringify(cc));
    }, [cc]);



    const movetowtc = (recipe) => {
        const exists = wtc.find(item => item.recipe_id === recipe.recipe_id);
        if (!exists) {
            setWtc([...wtc, recipe]);
        }
    }

    const deletewtc = (recipe_id) => {

        const itemToMove = wtc.find(item => item.recipe_id === recipe_id);
        if (!itemToMove) return;

        const remainingwtc = wtc.filter(item => item.recipe_id !== recipe_id);
        setWtc(remainingwtc);

        setCc([...cc, itemToMove]);
    }

    const clearAll = () => {
        const confirmClear = window.confirm("Are you sure you want to clear everything?");
        if (!confirmClear) return;

        setWtc([]);
        setCc([]);
        localStorage.removeItem('wtc');
        localStorage.removeItem('cc');
    };

    return (
        <div className='md:flex md:justify-center md:items-center mb-4'>
            <section className='w-full  md:w-[54%] min-h-[400px]  grid   grid-cols-2 gap-4 rounded-xl'>
                {
                    recipes.map((recipe) => <Recipe key={recipe.recipe_id} recipe={recipe} movetowtc={movetowtc}></Recipe>)
                }
            </section>
            <section className='w-full md:w-[38%] min-h-[400px] border rounded-2xl ml-10 '>
                <CookCooking wtc={wtc} deletewtc={deletewtc} clearAll={clearAll} cc={cc}></CookCooking>
            </section>
        </div>
    );
};

export default Bottom;