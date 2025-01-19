import { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import { useLoaderData } from "react-router-dom";
import { updateSubmenu } from "../../../api/menuSubmenu";
import Swal from "sweetalert2";



const UpdateSubmenu = () => {
    const subMenuData = useLoaderData() || {};
    const { _id, name, menu } = subMenuData
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const submenu = e.target.submenu.value;
        const menu = e.target.menu.value;
        const subMenuData = {
            name: submenu,
            menu: menu
        }
        try {
            const { data } = await updateSubmenu(_id, subMenuData)
            setLoading(false)
            console.log(data)
            if (data.modifiedCount > 0) {

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${submenu} updated successful`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (err) {
            console.log(err)
        }


    }


    return (
        <div className='mt-8 w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1  gap-10'>

                    <div className='space-y-1 text-sm'>
                        <label htmlFor='title' className='block text-gray-600'>
                            Submenu
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                            name='submenu'
                            id='submenu'
                            type='text'
                            defaultValue={name ? name : ''}
                            placeholder={name}
                            required
                        />
                    </div>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='title' className='block text-gray-600'>
                            Menu
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                            name='menu'
                            id='menu'
                            type='text'
                            defaultValue={menu ? menu : ''}
                            placeholder={menu}
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
                        : 'Save & Continue'}
                </button>
            </form>
        </div>
    );
};

export default UpdateSubmenu;