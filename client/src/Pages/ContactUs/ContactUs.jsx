import { Link } from "react-router-dom";
import facebook from "../../assets/icon/facebook36.png"
import instagram from "../../assets/icon/instagram.png"
import tiktok from "../../assets/icon/tiktok.png"
import youtube from "../../assets/icon/youtube.png"
import twitter from "../../assets/icon/twitter.png"
import { FaRegEnvelope } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { SiWhatsapp } from "react-icons/si";

import ReactWhatsapp from "react-whatsapp";
import { TbFidgetSpinner } from "react-icons/tb";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const ContactUs = () => {
    const [loading, setLoading] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        setLoading(true)
        e.preventDefault();

        emailjs
            .sendForm('service_pdjk1pv', 'template_4l8jdp9', form.current, {
                publicKey: 'II30QtvH2LAVl4M6s',
            })
            .then(
                () => {

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thanks For Email us",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setLoading(false)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    Swal.fire({
                        position: "top-end",
                        icon: "warning",
                        title: `${error.text}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setLoading(false)
                },
            );
    };
    return (
        <div className="pt-32  min-h-screen pb-10 px-4 lg:px-0">
            <h2 className="text-3xl text-center font-bold">Contact Us</h2>
            <div className="hero pt-10 ">
                <div className="hero-content flex-col-reverse lg:flex-row w-full">
                    <div className="text-center lg:text-left w-full md:w-1/2 mt-8 md:mt-0">
                        <div className="pb-6">
                            <div className=" flex justify-start items-center gap-2 font-semibold mt-3">
                                <FaRegEnvelope className="text-lg text-black"></FaRegEnvelope>
                                <p className="">info@deluxmart.com</p>
                            </div>
                            <div className=" flex justify-start items-center gap-2 py-2 font-semibold">
                                <IoCall className="text-lg text-black"></IoCall>
                                <p className="">+971563782886, +8801819199923</p>
                            </div>
                            <div className=" flex justify-start items-center gap-2 font-semibold">

                                <ReactWhatsapp number="+971563782886"  >
                                    <div className="flex items-center justify-center gap-2 ">
                                        <SiWhatsapp className="text-lg text-black"></SiWhatsapp>
                                        <p className="">+971563782886</p>
                                    </div>
                                </ReactWhatsapp>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link to={'https://web.facebook.com/deluxmart'}><img className="cursor-pointer" src={facebook} alt="" /></Link>
                            <Link to={'https://www.instagram.com/deluxmart1/'}><img className="cursor-pointer" src={instagram} alt="" /></Link>
                            <Link to={'/'}><img className="cursor-pointer" src={tiktok} alt="" /></Link>
                            <Link to={'https://www.youtube.com/@deluxmart1'}><img className="cursor-pointer" src={youtube} alt="" /></Link>
                            <Link to={'https://x.com/DeluxMart'}><img className="cursor-pointer bg-black w-[30px] h-[30px] rounded-lg" src={twitter} alt="" /></Link>
                        </div>
                    </div>

                    <div className="card shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100 py-4">
                        <h2 className="text-center text-lg font-bold pb-2">Drop Your Message</h2>
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col md:flex-row justify-around items-start gap-10">
                            <div className='w-full px-4'>

                                <div className='space-y-1 w-full text-sm'>
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
                                    <label htmlFor='number' className='block text-gray-600'>
                                        Number
                                    </label>
                                    <input
                                        className='w-full px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md '
                                        name='number'
                                        id='number'
                                        type='number'
                                        placeholder='Mobile Number'
                                        required

                                    />
                                </div>
                                <div className='space-y-1 text-sm mt-4'>
                                    <label htmlFor='email' className='block text-gray-600'>
                                        Email
                                    </label>
                                    <input
                                        className='w-full px-4 py-3 text-gray-800 border border-cyan-300 focus:outline-cyan-500 rounded-md '
                                        name='email'
                                        id='number'
                                        type='email'
                                        placeholder='email'
                                        required

                                    />
                                </div>

                                <div className='space-y-1 text-sm mt-6'>
                                    <label htmlFor='contactNumber' className='block text-gray-600'>
                                        Write your Massage
                                    </label>
                                    <textarea
                                        id='description5'
                                        className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-cyan-300 focus:outline-cyan-500 '
                                        name='message'
                                        placeholder="Write your message"
                                        required>

                                    </textarea>
                                </div>
                                <div className="flex justify-between items-center gap-4">
                                    <button
                                        type='submit'
                                        className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-cyan-500'
                                    >
                                        {loading ?
                                            <TbFidgetSpinner className='animate-spin m-auto' />
                                            : 'Send'}
                                    </button>

                                </div>

                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;