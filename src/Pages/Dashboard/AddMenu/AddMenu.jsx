import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { TbFidgetSpinner } from "react-icons/tb";

import Swal from "sweetalert2";

import { addMenu, addSubMenu, } from "../../../api/menuSubmenu";
import useMenus from "../../../Hooks/useMenus";


const AddMenu = () => {
    const [loading, setLoading] = useState(false)
    const [allMenus, , refetch] = useMenus();
   
    const handleMenu = async (e) => {
        e.preventDefault()
        const menu = e.target.menu.value;
        const menuData = { menu: menu }

        try {
            setLoading(true)
            const data = await addMenu(menuData)
            setLoading(false)
            if (data.insertedId) {

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${menuData} upload successful`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (err) {
            console.log(err)
        }


    }
    const handleSubmenu = async (e) => {
        e.preventDefault()
        const menu = e.target.menu.value;
        const submenu = e.target.submenu.value;
        const subMenuData = {
            name: submenu,
            menu: menu
        }

        try {
            // setLoading(true)
            const data = await addSubMenu(subMenuData)
            setLoading(false)
            if (data.insertedId) {
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${submenu} upload successful`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (err) {
            console.log(err)
        }


    }

    return (
        <div>
            <Helmet><title>My Shop || Add Menu</title></Helmet>
            <h2 className="text-xl text-center font-bold uppercase pt-8 pb-4">Add Menu</h2>

            <div className="">
                <form onSubmit={handleMenu}>
                    <div className='flex justify-center items-center gap-2'>

                        <div className='space-y-1 text-sm w-4/5'>
                            <label htmlFor='title' className='block text-gray-600'>
                                Menu
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='menu'
                                id='menu'
                                type='text'
                                placeholder='Menu'
                                required
                            />
                        </div>
                        <button
                            type='submit'
                            className=' p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
                        >
                            {loading ?
                                <TbFidgetSpinner className='animate-spin m-auto' />
                                : 'Add'}
                        </button>

                    </div>


                </form>
            </div>

            <div className="mt-8">
                <h2 className=" text-xl text-center font-bold uppercase pt-8 pb-4">Add Submenu</h2>
                <form onSubmit={handleSubmenu}>
                    <div className='flex items-center gap-2 pt-4'>                       
                        <div className='w-1/2 space-y-1 text-sm'>
                            <label htmlFor='menu' className='block text-gray-600'>
                                Menu
                            </label>
                            <select
                                required
                                className='w-full px-4 py-3 border-rose-200 border-2 focus:outline-rose-500 rounded-md'
                                name='menu'
                                defaultValue={''}
                            >

                                <option value="" disabled selected>
                                    Selected Menu
                                </option>

                                {
                                allMenus && allMenus.map(item => (
                                    <option value={item.menu} key={item._id}>
                                        
                                        {item.menu}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='space-y-1 text-sm w-4/5'>
                            <label htmlFor='title' className='block text-gray-600'>
                                Submenu
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='submenu'
                                id='submenu'
                                type='text'
                                placeholder='Submenu'
                                required
                            />
                        </div>


                    </div>
                    <button
                        type='submit'
                        className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
                    >
                        {loading ?
                            <TbFidgetSpinner className='animate-spin m-auto' />
                            : 'Add'}
                    </button>


                </form>
            </div>

            


        </div>
    );
};

export default AddMenu;