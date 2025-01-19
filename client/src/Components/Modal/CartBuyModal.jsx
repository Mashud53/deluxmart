import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { TbFidgetSpinner } from 'react-icons/tb';

import { cartOrderProduct } from '../../api/order';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';


const CartBuyModal = ({ closeModal, isOpen, cart, totalPrice, refetch }) => {

    const { user } = useAuth();
    const [loading, setLoading] = useState(false)


    const totalQuantity = cart.reduce((total, item) => total + parseFloat(item?.quantity), 0)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const street = form.street.value;
        const appartment = form.apartment.value;
        const city = form.city.value;
        const phone = form.mobile.value;
        const date = new Date();
        console.log("cartbymodal")

        const contactInfo = {
            buyer: user?.displayName,
            email: user?.email,
            street,
            appartment,
            city,
            phone,
            date,
            status: 'pending'
        }
        const productInfo = {
            productId: cart.map(item => item.productId),
            cartId: cart.map(item => item._id),
            quantity: cart.map(item => item.quantity),
            price: cart.map(item => item.price),
            selectedColor: cart.map(item => item?.selectedColor),
            storage: cart.map(item => item?.storage),
            title: cart.map(item => item.name),
            totalPrice,
            // date: new Date()
        }
        console.log(productInfo)
        const orderInfo = Object.assign({}, productInfo, contactInfo);

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

        refetch()
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
                            <Dialog.Panel className='w-full max-w-screen-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all py-24'>
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
                                                <div className='mt-2 text-right'>
                                                    <div className='flex justify-end items-center text-base text-gray-500'>
                                                        Sub Total Price: <span className=" font-semibold mr-1 ml-4">&#x62f;&#x2e;&#x625;</span><p>{totalPrice}</p>
                                                    </div>
                                                </div>
                                                <div className='mt-2 text-right'>
                                                    <div className='flex justify-end items-center text-base text-gray-500'>
                                                        Quantity: <p>{totalQuantity}</p>
                                                    </div>
                                                </div>
                                                <div className='mt-2 text-right'>
                                                    <div className='flex justify-end items-center text-base text-gray-500'>
                                                        Shiping Cost: <span className=" font-semibold mr-1 ml-4">&#x62f;&#x2e;&#x625;</span><p>0</p>
                                                    </div>
                                                </div>
                                                <div className='mt-2 text-right'>
                                                    <div className='flex justify-end items-center text-base text-gray-500'>
                                                        Total Price: <span className=" font-semibold mr-1 ml-4">&#x62f;&#x2e;&#x625;</span><p>{totalPrice}</p>
                                                    </div>
                                                </div>
                                                <hr className='mt-8 ' />
                                                <h2 className='font-semibold'>Payment Method</h2>
                                                <h2>Cash on delivery</h2>
                                            </div>

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

export default CartBuyModal;