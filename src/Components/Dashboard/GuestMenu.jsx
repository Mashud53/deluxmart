import { FaListCheck } from "react-icons/fa6";
import MenuItem from "./Sidebar/MenuItem";
import { IoMdCart } from "react-icons/io";
import { MdQueryStats, MdRealEstateAgent } from "react-icons/md";


const GuestMenu = () => {
    return (
        <>
            
            <MenuItem
                icon={IoMdCart}
                label='My Cart'
                address='my-cart'
            />
            <MenuItem
                icon={MdRealEstateAgent}
                label='My Booking'
                address='/dashboard'
            />
            
            <MenuItem
                icon={FaListCheck}
                label='Order'
                address='my-order'
            />
            <MenuItem
                icon={MdQueryStats}
                label='Payment History'
                address='/dashboard'
            />
        </>
    );
};

export default GuestMenu;