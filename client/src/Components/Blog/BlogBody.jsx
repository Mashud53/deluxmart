import { useState } from "react";
import { FaEye, FaHeart } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
import useBlogs from "../../Hooks/useBlogs";
import Loader from "../Loader/Loader";
import BlogBanner from "./BlogBanner";
import { Helmet } from "react-helmet-async";


const BlogBody = () => {
    const [blogs, isLoading, refetch] = useBlogs();
    const [red, setRed] = useState(false)
    const handleRed = () => {
        setRed(!red)
    }
    console.log(blogs)

    const handleView =(id)=>{
        console.log(id)

    }

    if (isLoading) { return <Loader></Loader> }
    return (
        <>
        <Helmet title="Delux || blogs"></Helmet>
            <BlogBanner></BlogBanner>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 items-center justify-around gap-6 font-sans px-4 lg:px-0 pb-10">
                {
                    blogs && blogs?.map(item => <div key={item._id}>
                        <div className="group bg-white">
                            <img src={item?.image_url} alt="" />

                        </div>
                        <div className="flex justify-between items-center pt-2">
                            <div className=" flex items-center gap-4 text-md">
                                <div className="flex items-center gap-1">
                                    <FaEye className="text-red-600" />
                                    <p className="text-sm">212</p>
                                </div>
                                <FaHeart className={`${red ? 'text-red-600' : "text-gray-400"}`} onClick={handleRed} />

                            </div>
                            <p className="flex items-center text-sm"><MdDateRange /> <span> {item.publish_date}</span></p>
                        </div>

                        <div className="py-6">
                            <h2 className="text-lg font-bold font-mono">{item.title}</h2>

                            <p className="pt-4 text-base">{item?.description.slice(0, 75)}</p>
                        </div>
                        <Link to={`/blogs/${item._id}`}><button onClick={()=>handleView(item._id)} className="text-cyan-400 font-semibold">Read more ...</button></Link>

                    </div>)
                }





            </div>

        </>

    );
};

export default BlogBody;