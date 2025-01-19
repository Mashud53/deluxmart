import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import ScrollTotop from "../Components/ScrollToTop/ScrollTotop";



const MainLaout = () => {
    return (
        <div>
            <ScrollTotop/>
            <Navbar/>
            <Outlet></Outlet>
            <Footer></Footer>
            
            
        </div>
    );
};

export default MainLaout;