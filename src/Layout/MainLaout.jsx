import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";



const MainLaout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            <Footer></Footer>
            
            
        </div>
    );
};

export default MainLaout;