import { Helmet } from "react-helmet-async";
import { FaEye } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";


const BlogDetails = () => {
    const blog = useLoaderData();
    const { _id, title, description, publish_date, image_url } = blog;
    const handleSubmit = async (e) => {
        e.preventDefault()
        const comment = e.target.comment.value
        console.log(comment)
    }
    return (
        <>
            <Helmet title="Delux || Blogs"></Helmet>
            <div className="min-h-screen pb-10">
                <img src={image_url} alt="delux mart" className="w-full h-full" />
                <h2 className="text-xl font-bold mt-8">{title}</h2>
                <div className="py-4 flex gap-4">
                    <p className="flex items-center gap-2 text-sm ">
                        <MdDateRange className="text-red-600" /> <span> {publish_date}</span>
                    </p>
                    <div className="flex items-center gap-2">
                        <FaEye className="text-red-600" />
                        <p className="text-sm">212</p>
                    </div>
                </div>
                <p>{description}</p>

            </div>

            <div className="pb-4">
                <h2 className="text-base font-semibold">Comments</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="flex items-center gap-2">
                        <input name="comment" type="text" placeholder="Write a comment" className="input input-bordered w-4/5" required />
                        <div className="form-control">
                            <button className="btn px-4 bg-cyan-500 text-white text-lg hover:text-cyan-500"><FaTelegramPlane /></button>
                        </div>
                    </div>
                </form>

            </div>
            <div className="pb-10">
                All Coments
            </div>
        </>

    );
};

export default BlogDetails;