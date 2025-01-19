import { BsGraphUp } from "react-icons/bs";
import MenuItem from "./Sidebar/MenuItem";
import { MdOutlineAddBusiness } from "react-icons/md";
import { PiListMagnifyingGlassDuotone } from "react-icons/pi";


import { FaListCheck } from "react-icons/fa6";


const HostMenu = () => {
    return (
        <>
            <MenuItem
                icon={BsGraphUp}
                label='Statistics'
                address='/dashboard'
            />
            <MenuItem
                icon={MdOutlineAddBusiness}
                label='Add Product'
                address='add-product'
            />
           
            <MenuItem
                icon={PiListMagnifyingGlassDuotone}
                label='Manage Product'
                address='manage-product'
            />
            
            
            <MenuItem
                icon={FaListCheck}
                label='Manage Orders'
                address='order'
            />
        </>
    );
};

export default HostMenu;