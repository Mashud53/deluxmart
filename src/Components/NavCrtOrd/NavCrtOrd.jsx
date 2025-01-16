import { BiCartAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import useLoclaCart from "../../Hooks/useLoclaCart";



const NavCrtOrd = ({ user, userRole, getOrder, cart }) => {
   const [localCarts, ] = useLoclaCart();

    const [order, setOrder] = useState({});

    useEffect(() => {
        if (getOrder && getOrder.length > 0) {
            const filterOrder = getOrder.filter(item => item.status == 'pending')
            setOrder(filterOrder)
        }
    }, [getOrder])

    // if (isLoading) { return <ClipLoader height={100} color="#36d7b7" /> }
    return (
        <div>
            {user ? <>
                {userRole && userRole == 'admin' || userRole == 'host' ? <Link to={'dashboard/order'}>
                    <div className=" relative mx-4 p-1">
                        <FaBell className="text-rose-500 text-2xl" />
                        <div className="absolute -top-3 -right-2 text-rose-500 font-semibold">+{order ? order?.length : '0'}</div>
                    </div>
                </Link> : <Link to={'dashboard/my-cart'}>
                    <button className=" relative mx-4 p-1">
                        <BiCartAlt className="text-white text-2xl" />
                        <div className="absolute -top-3 -right-2 text-white font-semibold">+{cart ? cart?.length : '0'}</div>
                    </button>
                </Link>}
            </> : <>
                <Link to={'/my-cart'}>
                    <button className=" relative mx-4 p-1">
                        <BiCartAlt className="text-white text-2xl" />
                        <div className="absolute -top-3 -right-2 text-white font-semibold">+{localCarts ? localCarts?.length : '0'}</div>
                    </button>
                </Link></>
            }

        </div>

    );
};

export default NavCrtOrd;