import { useState } from "react";
import { FaEye, FaHeart } from "react-icons/fa";


const BlogBody = () => {
    const [red, setRed] = useState(false)
    const handleRed =()=>{
        setRed(!red)
    }
    return (
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 items-center justify-around gap-6 font-sans px-4 lg:px-0">
           <div>
                <div className="group bg-white">
                    <img src="https://i.ibb.co.com/NVy3pCy/banner-2.jpg" alt="" />

                    <div className="relative ">
                        <div className="absolute bottom-2 left-2 flex items-center gap-4 text-xl">
                            <div className="flex items-center gap-1">
                                <FaEye className="text-red-600" />
                                <p className="text-sm">212</p>
                            </div>
                            <FaHeart className={`${red ? 'text-red-600': "text-white"}`} onClick={handleRed} />
                            
                        </div>
                    </div>
                </div>

                <div className="py-6">
                    <h2 className="text-lg font-bold font-mono">Fashion Model Shoot</h2>
                    <p className="text-sm">Published: 12.01.25</p>
                    <p className="pt-4 text-base">Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. …</p>
                </div>
                <button className="text-cyan-400 font-semibold">Read more ...</button>

            </div>
            <div>
                <div className="group bg-white">
                    <img src="https://i.ibb.co.com/NVy3pCy/banner-2.jpg" alt="" />

                    <div className="relative ">
                        <div className="absolute bottom-2 left-2 flex items-center gap-2 text-xl">
                            <FaEye className="text-red-600" />
                            <FaHeart className={`${red ? 'text-red-600': "text-white"}`} onClick={handleRed} />
                            
                        </div>
                    </div>
                </div>

                <div className="py-6">
                    <h2 className="text-lg font-bold font-mono">Fashion Model Shoot</h2>
                    <p className="text-sm">Published: 12.01.25</p>
                    <p className="pt-4 text-base">Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. …</p>
                </div>
                <button className="text-cyan-400 font-semibold">Read more ...</button>

            </div>
            <div>
                <div className="group bg-white">
                    <img src="https://i.ibb.co.com/NVy3pCy/banner-2.jpg" alt="" />

                    <div className="relative ">
                        <div className="absolute bottom-2 left-2 flex items-center gap-2 text-xl">
                            <FaEye className="text-red-600" />
                            <FaHeart className={`${red ? 'text-red-600': "text-white"}`} onClick={handleRed} />
                            
                        </div>
                    </div>
                </div>

                <div className="py-6">
                    <h2 className="text-lg font-bold font-mono">Fashion Model Shoot</h2>
                    <p className="text-sm">Published: 12.01.25</p>
                    <p className="pt-4 text-base">Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. …</p>
                </div>
                <button className="text-cyan-400 font-semibold">Read more ...</button>

            </div>
            <div>
                <div className="group bg-white">
                    <img src="https://i.ibb.co.com/NVy3pCy/banner-2.jpg" alt="" />

                    <div className="relative ">
                        <div className="absolute bottom-2 left-2 flex items-center gap-2 text-xl">
                            <FaEye className="text-red-600" />
                            <FaHeart className={`${red ? 'text-red-600': "text-white"}`} onClick={handleRed} />
                            
                        </div>
                    </div>
                </div>

                <div className="py-6">
                    <h2 className="text-lg font-bold font-mono">Fashion Model Shoot</h2>
                    <p className="text-sm">Published: 12.01.25</p>
                    <p className="pt-4 text-base">Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. …</p>
                </div>
                <button className="text-cyan-400 font-semibold">Read more ...</button>

            </div>
            
            <div>
                <div className="group bg-white">
                    <img src="https://i.ibb.co.com/NVy3pCy/banner-2.jpg" alt="" />

                    <div className="relative ">
                        <div className="absolute bottom-2 left-2 flex items-center gap-2 text-xl">
                            <FaEye className="text-red-600" />
                            <FaHeart className={`${red ? 'text-red-600': "text-white"}`} onClick={handleRed} />
                            
                        </div>
                    </div>
                </div>

                <div className="py-6">
                    <h2 className="text-lg font-bold font-mono">Fashion Model Shoot</h2>
                    <p className="text-sm">Published: 12.01.25</p>
                    <p className="pt-4 text-base">Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus nisl aliquam. …</p>
                </div>
                <button className="text-cyan-400 font-semibold">Read more ...</button>

            </div>
            


        </div>
    );
};

export default BlogBody;