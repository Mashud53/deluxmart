
// import { useState } from 'react';


import { categories } from './CategoriesData';
import { useNavigate, useSearchParams } from 'react-router-dom';
import qs from 'query-string'



const Category = () => {

    
    const [params, setParams] = useSearchParams();

    const navigate = useNavigate()
    // params.get('category')
    const selected = params.get('category')

    const handleClik = (label) => {

        let currnetQuery = {}
        if (params) {
            currnetQuery = qs.parse(params.toString())
            console.log(currnetQuery)
            const updatedQuery = { ...currnetQuery, category: label }
            const url = qs.stringifyUrl({
                url: '/',
                query: updatedQuery
            })
            navigate(url)
        }
    }

   
    // grid grid-cols-3 md:grid-cols-6 lg:grid-cols-11
    return (
        <div className={`w-full flex items-center justify-center gap-4 font-catamaran text-center text-xs md:text-base font-semibold py-2 px-4 lg:px-0 overflow-x-scroll`}>
            {categories?.map(category =>
                <div
                    onClick={() => handleClik(category.label)}
                    className={` text-neutral-400 transition cursor-pointer`}
                    key={category.label}> <li  className={` list-none ${selected === category.label ? "bg-cyan-400 rounded-lg text-white px-2 py-1 " : " text-black hover:text-base"} `}>{category.label}</li>
                    {/* <div className='w-[50px] '>
                       
                    </div> */}
                </div>)}
                

        </div>

    );
};

export default Category;