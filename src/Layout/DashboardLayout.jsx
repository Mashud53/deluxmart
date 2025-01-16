import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Dashboard/Sidebar/Sidebar";
import { useState } from "react";


const DashboardLayout = () => {
    const [isActive, setActive] = useState(false);
    return (
        <div className="relative min-h-screen max-w-screen-xl mx-auto md:flex ">
            {/* sidebar */}
            <Sidebar isActive={isActive} setActive={setActive}></Sidebar>
            <div className="flex-1 md:ml-64">
                <div className="p-5">
                    <Outlet context={{setActive}}></Outlet>
                </div>
            </div>
            
        </div>
    );
};

export default DashboardLayout;