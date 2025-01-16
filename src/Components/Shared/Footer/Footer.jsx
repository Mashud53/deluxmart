// import { Link } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { SiWhatsapp } from "react-icons/si";
import facebook36 from '../../../assets/icon/facebook36.png'
import instagram from '../../../assets/icon/instagram.png'
import tiktok from '../../../assets/icon/tiktokround.png'
import youtube from '../../../assets/icon/youtube.png'
import twitter from '../../../assets/icon/twitter.png'
import { Link } from "react-router-dom";
import logo from "../../../../src/assets/logo.png"



const Footer = () => {
    return (
        <footer className="bg-[#232F3E] footer p-10 w-full mx-auto flex flex-col justify-center items-center font-catamaran text-neutral-content">
            <div className="w-full flex flex-col md:flex-row md:justify-around justify-center items-start">
                <nav>
                    <h6 className=" text-white text-lg font-bold pb-2">Follow Us</h6>
                    <div className="flex justify-start items-center gap-4">
                        <Link to={'https://web.facebook.com/deluxmart'}><img className="cursor-pointer" src={facebook36} alt="" /></Link>
                        <Link to={'https://www.instagram.com/deluxmart1/'}><img className="cursor-pointer" src={instagram} alt="" /></Link>
                        <Link to={'/'}><img className="cursor-pointer" src={tiktok} alt="" /></Link>
                        <Link to={'https://www.youtube.com/@deluxmart1'}><img className="cursor-pointer" src={youtube} alt="" /></Link>
                        <Link to={'https://x.com/DeluxMart'}><img className="cursor-pointer w-[30px] h-[30px]" src={twitter} alt="" /></Link>
                    </div>

                    <div className="mt-4">
                        <h6 className=" text-white text-lg font-bold">Any Query</h6>
                        <div className=" flex justify-start items-center gap-2 font-semibold mt-3">
                            <FaRegEnvelope className="text-lg text-white"></FaRegEnvelope>
                            <p className="">info@deluxmart.com</p>
                        </div>
                        <div className=" flex justify-start items-center gap-2 py-2 font-semibold">
                            <IoCall className="text-lg text-white"></IoCall>
                            <p className="">+971563782886, +8801819199923</p>
                        </div>
                        <div className=" flex justify-start items-center gap-2 font-semibold">
                            <SiWhatsapp className="text-lg text-green-500"></SiWhatsapp>
                            <p className="">+971563782886</p>
                        </div>

                    </div>
                </nav>

                <nav className="text-white flex flex-col">
                    <h6 className=" text-white text-lg font-bold pb-2">Shopping with us</h6>
                    <Link to={'/termsConditons'}>
                        <p className="link link-hover">Terms & Conditions</p>
                    </Link>
                    <Link to={'/privecyPolicy'}>
                        <p className="link link-hover">Privacy Policy</p>
                    </Link>
                    <Link to={'/returnPolicy'}>
                        <p className="link link-hover">Return & Refund Policy </p>
                    </Link>
                    <Link to={'/shippingAndDelivery'}>
                        <p className="link link-hover">Shipping & Delivery </p>
                    </Link>
                    <Link to={'/faq'}>
                        <p className="link link-hover">Faq </p>
                    </Link>


                </nav>
                <nav className="flex flex-col text-white">
                    <img className="w-[150px] md:w-[200px] mb-4" src={logo} alt="Delux Mart" />


                    <Link to={'/allProducts'}>
                        <p className="link link-hover">All Product</p>
                    </Link>

                    <Link to={'/aboutUs'}><p className="link link-hover">About Us</p></Link>
                    <Link to={'/contactUs'}><p className="link link-hover">Contact Us</p></Link>
                    

                </nav>
            </div>
            <div>
                COPYRIGHT © 2024 Delux Mart ALL RIGHTS RESERVED
            </div>

        </footer>
    );
};

export default Footer;