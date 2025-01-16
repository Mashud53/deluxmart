import BlogBanner from "../Components/Blog/BlogBanner";
import BlogBody from "../Components/Blog/blogBody";
import BlogNav from "../Components/Blog/BlogNav";


const BlogLayout = () => {
    return (
        <div className="relative min-h-screen max-w-screen-xl mx-auto">
            <BlogNav></BlogNav>
            <BlogBanner></BlogBanner>
            <BlogBody></BlogBody>
            
        </div>
    );
};

export default BlogLayout;