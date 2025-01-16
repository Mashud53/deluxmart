import { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import { orderProduct } from "../../api/order";
import Swal from "sweetalert2";
import { updateSales } from "../../api/product";




const DeliveryAddress = ({ closeModal, orderInfo: productInfo, qt, _id, customerName }) => {

    const [loading, setLoading] = useState(false)



    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const street = form.street.value;
        const appartment = form.apartment.value;
        const city = form.city.value;
        const phone = form.mobile.value;
        const date = new Date();
        const primaryName = form.name.value;
        const buyer = customerName || primaryName

        const contactInfo = { buyer, street, appartment, city, phone, date, status: 'pending' }

        const orderInfo = Object.assign({}, contactInfo, productInfo)


        setLoading(true)
        const data = await orderProduct(orderInfo)
        if (data.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${productInfo.title} Place order successful`,
                showConfirmButton: false,
                timer: 1500
            });
        }
        // sales update 
        await updateSales(_id, { sales: qt })


        closeModal()
    }
    return (
        <div className='w-full py-8  text-gray-800 rounded-xl bg-gray-50 font-catamaran'>

            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-around items-start gap-10">
                <div className='w-full lg:w-1/2'>
                    <h2 className="mb-4 text-lg font-bold">Delivery Address</h2>
                    <div className="my-6">
                        <h2 className="font-semibold">Country / Region</h2>
                        <h2 className="">United Arab Emirates</h2>
                    </div>
                    {
                        !customerName &&
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='street' className='block text-gray-600'>
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
                    }
                    <div className='space-y-1 text-sm'>
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
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr className="bg-base-200">
                                   
                                    <td>Sub Total Price</td>                                    
                                    <td>&#x62f;&#x2e;&#x625; {productInfo?.totalPrice}</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    
                                    <td>Quantity </td>                                    
                                    <td>{qt}</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    
                                    <td>Shiping Cost</td>
                                    <td>00</td>
                                </tr>
                                <tr className="font-bold">
                                    
                                    <td>Total Price</td>
                                    <td >&#x62f;&#x2e;&#x625; {productInfo.totalPrice}</td>
                                </tr>
                            </tbody>
                        </table>
                        <hr className='mt-8 ' />
                        <h2 className='font-semibold'>Payment Method</h2>
                        <h2>Cash on delivery</h2>
                    </div>
                    </div>
                    {/* --------------------- */}
                    
                    {/* ......................  */}

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
    );
};

export default DeliveryAddress;