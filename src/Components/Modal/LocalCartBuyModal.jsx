import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { TbFidgetSpinner } from 'react-icons/tb';
import Swal from 'sweetalert2';

import { cartOrderProduct } from '../../api/order';


const LocalCartBuyModal = ({ isOpen, closeModal, totalPrice, localCarts, localRefetch }) => {

    const [loading, setLoading] = useState(false)


    const totalQuantity = localCarts.reduce((total, item) => total + parseFloat(item?.quantity), 0)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const street = form.street.value;
        const appartment = form.apartment.value;
        const city = form.city.value;
        const phone = form.mobile.value;
        const date = new Date();
        
        const contactInfo = {
            buyer: name,
            street,
            appartment,
            city,
            phone,
            date,
            status: 'pending'
        }
        const productInfo = {
            productId: localCarts.map(item => item.productId),
            cartId: localCarts.map(item => item._id),
            quantity: localCarts.map(item => item.quantity),
            price: localCarts.map(item => item.price),
            selectedColor: localCarts.map(item => item?.selectedColor),
            storage: localCarts.map(item => item?.storage),
            title: localCarts.map(item => item.name),
            totalPrice,
            // date: new Date()
        }
        
        const orderInfo = Object.assign({}, productInfo, contactInfo);
        console.log(orderInfo)
        setLoading(true)
        const data = await cartOrderProduct(orderInfo)
        if (data.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Place order successful`,
                showConfirmButton: false,
                timer: 1500
            });
        }
        localStorage.setItem('deluxCart',[])
        localRefetch()
        closeModal()
        setLoading(false)
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-20' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex w-full min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='w-full md:mt-20 max-w-screen-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <Dialog.Title
                                    as='h3'
                                    className='text-lg font-medium text-center leading-6 text-gray-900'
                                >
                                    Check Out
                                </Dialog.Title>

                                {/* delivery address  */}
                                <div className='w-full py-8  text-gray-800 rounded-xl bg-gray-50 font-catamaran'>

                                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-around items-start gap-10">
                                        <div className='w-full lg:w-1/2'>
                                            <h2 className="mb-4 text-lg font-bold">Delivery Address</h2>
                                            <div className="my-6">
                                                <h2 className="font-semibold">Country / Region</h2>
                                                <h2 className="">United Arab Emirates</h2>
                                            </div>
                                            <div className='space-y-1 text-sm'>
                                                <label htmlFor='name' className='block text-gray-600'>
                                                    Name
                                                </label>
                                                <input
                                                    className='w-full px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md '
                                                    name='name'
                                                    id='name'
                                                    type='text'
                                                    placeholder='Name'
                                                    required
                                                />
                                            </div>
                                            <div className='space-y-1 text-sm mt-4'>
                                                <label htmlFor='street' className='block text-gray-600'>
                                                    Street Address
                                                </label>
                                                <input
                                                    className='w-full px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md '
                                                    name='street'
                                                    id='street'
                                                    type='text'
                                                    placeholder='House number and street name'
                                                    required
                                                />
                                            </div>
                                            <div className='space-y-1 text-sm mt-4'>

                                                <input
                                                    className='w-full px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md '
                                                    name='apartment'
                                                    id='apartment'
                                                    type='text'
                                                    placeholder='apartment, suite, unite ets (optional)'

                                                />
                                            </div>
                                            <div className='space-y-1 text-sm mt-6'>
                                                <label htmlFor='city' className='block text-gray-600'>
                                                    Town / City
                                                </label>
                                                <input
                                                    className='w-full px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md '
                                                    name='city'
                                                    id='city'
                                                    type='text'
                                                    placeholder=''
                                                    required
                                                />
                                            </div>
                                            <div className='space-y-1 text-sm mt-6'>
                                                <label htmlFor='contactNumber' className='block text-gray-600'>
                                                    Phone
                                                </label>
                                                <input
                                                    className='w-full px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md '
                                                    name='mobile'
                                                    id='mobile'
                                                    type='number'
                                                    placeholder='Contact Number'
                                                    required
                                                />
                                            </div>

                                        </div>
                                        <div className="w-full lg:w-2/5">
                                            <div className='mt-10 bg-white border-2 p-6 font-sans'>

                                                <div className="overflow-x-auto">
                                                    <table className="table table-zebra">
                                                        {/* head */}
                                                        <thead>
                                                            <tr>
                                                                <th></th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {/* row 1 */}
                                                            <tr>
                                                                <td> Sub Total Price: </td>
                                                                <td>&#x62f;&#x2e;&#x625; {totalPrice}</td>


                                                            </tr>
                                                            <tr>
                                                                <td> Quantity: </td>
                                                                <td>{totalQuantity}</td>


                                                            </tr>
                                                            {/* row 2 */}
                                                            <tr>

                                                                <td>Shiping cost</td>
                                                                <td>&#x62f;&#x2e;&#x625; 00</td>
                                                            </tr>
                                                            {/* row 3 */}
                                                            <tr>

                                                                <td>Total Price:</td>
                                                                <td>&#x62f;&#x2e;&#x625; {totalPrice}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <hr className='mt-8 ' />
                                                <h2 className='font-semibold'>Payment Method</h2>
                                                <h2>Cash on delivery</h2>
                                            </div>
                                            {/* -------------------- */}


                                            {/* ------------------------- */}

                                            <div className="flex justify-between items-center gap-4">
                                                <button
                                                    type='submit'
                                                    className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-cyan-500'
                                                >
                                                    {loading ?
                                                        <TbFidgetSpinner className='animate-spin m-auto' />
                                                        : 'Place Order'}
                                                </button>
                                                <button onClick={() => closeModal()}
                                                    type='button'
                                                    className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>

                </div>
            </Dialog>
        </Transition>
    )
};

export default LocalCartBuyModal;