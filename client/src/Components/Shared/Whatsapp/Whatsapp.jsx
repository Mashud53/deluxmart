import ReactWhatsapp from 'react-whatsapp';
import { IoLogoWhatsapp } from "react-icons/io";

const Whatsapp = () => {
    return (
        <div className="fixed bottom-20 right-0 md:right-10 z-20">
            <ReactWhatsapp number="+971563782886" message='Thank you for message us' >
                <div className="flex items-center justify-center gap-2 ">
                    <h2 className="hidden md:flex border-2 bg-white border-neutral-100 rounded-lg shadow-lg px-2 py-1 text-base font-semibold">Sir, How can I help you?</h2>
                    <IoLogoWhatsapp className="text-5xl text-green-500  rounded-full shadow-lg"></IoLogoWhatsapp>
                </div>
            </ReactWhatsapp>
        </div>
    );
};

export default Whatsapp;