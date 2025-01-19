import { Outlet } from "react-router-dom";
import BlogNav from "../Components/Blog/BlogNav";
import Footer from "../Components/Shared/Footer/Footer";
import ScrollTotop from "../Components/ScrollToTop/ScrollTotop";


const BlogLayout = () => {
    return (
        <div className="relative min-h-screen max-w-screen-xl mx-auto">
            <ScrollTotop />
            <BlogNav></BlogNav>
            <Outlet/>           
          
            <Footer/>
            
        </div>
    );
};

export default BlogLayout;