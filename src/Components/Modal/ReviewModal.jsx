import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { TbFidgetSpinner } from 'react-icons/tb';

import { BiHappy, BiHappyHeartEyes } from "react-icons/bi";
import { TbMoodSad2 } from "react-icons/tb";

import useAuth from '../../Hooks/useAuth';
import { CgSmileNeutral } from 'react-icons/cg';
import { reviewInfo } from '../../api/review';

const ReviewModal = ({ closeModal, isOpen, setIsOpen, product }) => {
    const { user } = useAuth()
    const [loading, setLoading] = useState(false)
    const [rating, setRating] = useState('')
    const [color5, setColor5] = useState('bg-orange-300 group-hover:bg-orange-400')
    const [color4, setColor4] = useState('bg-orange-300 group-hover:bg-orange-400')
    const [color3, setColor3] = useState('bg-orange-300 group-hover:bg-orange-400')
    const [color2, setColor2] = useState('bg-orange-300 group-hover:bg-orange-400')
    const [icon5, setIcon5] = useState('text-orange-300 group-hover:text-orange-400')
    const [icon4, setIcon4] = useState('text-orange-300 group-hover:text-orange-400')
    const [icon3, setIcon3] = useState('text-orange-300 group-hover:text-orange-400')
    const [icon2, setIcon2] = useState('text-orange-300 group-hover:text-orange-400')

    const handleRating5 = (e) => {
        e.preventDefault()
        setColor5('bg-orange-400')
        setIcon5('text-orange-400')
        setIcon4('text-orange-300 group-hover:text-orange-400')
        setIcon3('text-orange-300 group-hover:text-orange-400')
        setIcon2('text-orange-300 group-hover:text-orange-400')
        
        setColor2('bg-orange-300 group-hover:bg-orange-400')
        setColor3('bg-orange-300 group-hover:bg-orange-400')
        setColor4('bg-orange-300 group-hover:bg-orange-400')
        setRating(5)
    }
    const handleRating4 = (e) => {
        e.preventDefault()
        setColor4('bg-orange-400')
        setIcon4('text-orange-400')
        setIcon5('text-orange-300 group-hover:text-orange-400')
        setIcon3('text-orange-300 group-hover:text-orange-400')
        setIcon2('text-orange-300 group-hover:text-orange-400')
        
        setColor5('bg-orange-300 group-hover:bg-orange-400')
        setColor2('bg-orange-300 group-hover:bg-orange-400')
        setColor3('bg-orange-300 group-hover:bg-orange-400')
        setRating(4)
    }
    const handleRating3 = (e) => {
        e.preventDefault()
        setColor3('bg-orange-400')
        setIcon3('text-orange-400')
        setIcon4('text-orange-300 group-hover:text-orange-400')
        setIcon5('text-orange-300 group-hover:text-orange-400')
        setIcon2('text-orange-300 group-hover:text-orange-400')
        setColor4('bg-orange-300 group-hover:bg-orange-400')
        setColor5('bg-orange-300 group-hover:bg-orange-400')
        setColor2('bg-orange-300 group-hover:bg-orange-400')
        setRating(3)
    }
    const handleRating2 = (e) => {
        e.preventDefault()
        setColor2('bg-orange-400')
        setIcon2('text-orange-400')
        setIcon4('text-orange-300 group-hover:text-orange-400')
        setIcon3('text-orange-300 group-hover:text-orange-400')
        setIcon5('text-orange-300 group-hover:text-orange-400')
        setColor3('bg-orange-300 group-hover:bg-orange-400')
        setColor4('bg-orange-300 group-hover:bg-orange-400')
        setColor5('bg-orange-300 group-hover:bg-orange-400')
        setRating(2)
    }

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        const form = e.target;
        const comment = form.comment.value;
        const productId = product.productId;
        const productName = product.title;
        const email = user.email;
        const userName = user.displayName;


        const reviewData = {
            productId,
            productName,
            comment,
            rating,
            userName,
            email
        }
        console.log(reviewData)
        await reviewInfo(reviewData)
        setColor5('bg-orange-300 group-hover:bg-orange-400')
        setColor4('bg-orange-300 group-hover:bg-orange-400')
        setColor3('bg-orange-300 group-hover:bg-orange-400')
        setColor2('bg-orange-300 group-hover:bg-orange-400')
        setLoading(false)
        setIsOpen(false)

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
                            <Dialog.Panel className='w-full max-w-screen-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <Dialog.Title
                                    as='h3'
                                    className='text-lg font-medium text-center leading-6 text-gray-900'
                                >
                                    Give Feedback
                                    <div className='mt-10'>
                                        <h2>{product.title}</h2>
                                        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-around items-start gap-10">
                                            <div className='w-full '>
                                                <div className='w-full  flex items-center justify-center'>
                                                    <div>
                                                        <div className='mt-2 border-2 border-gray-100 flex items-center justify-center gap-4 cursor-pointer px-4 py-2 rounded-lg group' onClick={handleRating5}>
                                                            <div className="rating">
                                                                <input type="radio" className={`mask mask-star-2 ${color5}`} />
                                                                <input type="radio" className={`mask mask-star-2 ${color5}`} />
                                                                <input type="radio" className={`mask mask-star-2 ${color5}`} />
                                                                <input type="radio" className={`mask mask-star-2 ${color5}`} />
                                                                <input type="radio" className={`mask mask-star-2 ${color5}`} />
                                                            </div>
                                                            <div>
                                                                <BiHappyHeartEyes className={`text-lg ${icon5}`} />
                                                            </div>
                                                        </div>
                                                        <div className='mt-2 border-2 border-gray-100 flex items-center justify-center gap-4 px-4 py-2 rounded-lg group' onClick={handleRating4}>
                                                            <div className="rating">
                                                                <input type="radio" className={`mask mask-star-2 ${color4}`} />
                                                                <input type="radio" className={`mask mask-star-2 ${color4}`} />
                                                                <input type="radio" className={`mask mask-star-2 ${color4}`} />
                                                                <input type="radio" className={`mask mask-star-2 ${color4}`} />
                                                                <input type="radio" className="mask mask-star-2 bg-orange-100 " />
                                                            </div>
                                                            <div>
                                                                <BiHappy className={`text-lg ${icon4}`} />
                                                            </div>
                                                        </div>
                                                        <div className='mt-2 border-2 border-gray-100 flex items-center justify-center gap-4 px-4 py-2 rounded-lg group' onClick={handleRating3}>
                                                            <div className="rating">
                                                                <input type="radio" className={`mask mask-star-2 ${color3}`} />
                                                                <input type="radio" className={`mask mask-star-2 ${color3}`} />
                                                                <input type="radio" className={`mask mask-star-2 ${color3}`} />
                                                                <input type="radio" className="mask mask-star-2 bg-orange-100 " />
                                                                <input type="radio" className="mask mask-star-2 bg-orange-100 " />
                                                            </div>
                                                            <div>
                                                                <CgSmileNeutral className={`text-lg ${icon3}`} />
                                                            </div>
                                                        </div>
                                                        <div className='mt-2 border-2 border-gray-100 flex items-center justify-center gap-4 px-4 py-2 rounded-lg group' onClick={handleRating2}>
                                                            <div className="rating">
                                                                <input type="radio" className={`mask mask-star-2 ${color2}`} />
                                                                <input type="radio" className={`mask mask-star-2 ${color2}`} />
                                                                <input type="radio" className="mask mask-star-2 bg-orange-100" />
                                                                <input type="radio" className="mask mask-star-2 bg-orange-100" />
                                                                <input type="radio" className="mask mask-star-2 bg-orange-100 " />
                                                            </div>
                                                            <div>
                                                                <TbMoodSad2 className={`text-lg ${icon2}`} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div className='space-y-1 text-sm mt-4'>

                                                    <input
                                                        className='w-full px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md '
                                                        name='comment'
                                                        id='comment'
                                                        type='text'
                                                        placeholder='Comments'

                                                    />
                                                </div>
                                                <div className="flex justify-between items-center gap-4">
                                                    <button
                                                        type='submit'
                                                        className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-cyan-500'
                                                    >
                                                        {loading ?
                                                            <TbFidgetSpinner className='animate-spin m-auto' />
                                                            : 'Submite'}
                                                    </button>

                                                </div>



                                            </div>

                                        </form>
                                    </div>
                                </Dialog.Title>



                            </Dialog.Panel>
                        </Transition.Child>
                    </div>

                </div>
            </Dialog>
        </Transition>
    );
};

export default ReviewModal;