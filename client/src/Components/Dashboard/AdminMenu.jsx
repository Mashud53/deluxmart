import { BsGraphUp } from "react-icons/bs";
import MenuItem from "./Sidebar/MenuItem";
import { MdOutlineAddBusiness } from "react-icons/md";

import { PiListMagnifyingGlassDuotone } from "react-icons/pi";
import { FaListCheck,FaUpload,FaStubber  } from "react-icons/fa6";
import { FaUserCog } from "react-icons/fa";
import { LuListPlus, LuListX } from "react-icons/lu";

const AdminMenu = () => {
    return (
        <>
            <MenuItem
                icon={BsGraphUp}
                label='Statistics'
                address='/dashboard'
            />
            <MenuItem
                icon={LuListPlus}
                label='Add Menu'
                address='add-menu'
            />
            <MenuItem
                icon={LuListX}
                label='Manage Menu'
                address='manage-menu'
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
                icon={FaUpload }
                label='Add Banner'
                address='add-banner'
            />
            <MenuItem
                icon={FaStubber}
                label='Manage Banners'
                address='manage-banner'
            />
            <MenuItem
                icon={FaUserCog}
                label='Manage User'
                address='manage-users'
            />
            <MenuItem
                icon={FaListCheck}
                label='Manage Orders'
                address='order'
            />
        </>
    );
};

export default AdminMenu;