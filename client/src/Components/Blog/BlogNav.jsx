import { FaHeart, FaStoreAlt } from 'react-icons/fa';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider'

const BlogNav = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="navbar bg-cyan-500">
            <div className="navbar-start">
                <Link to='/'>
                    <FaStoreAlt className='text-white text-xl' />
                </Link>
            </div>
            <div className="navbar-center">
                <img src={logo} alt="Deluxmart" className='w-[150px]' />
            </div>
            <div className="navbar-end">
                <Link to={"/blogs"}><button className='text-sm uppercase font-bold pr-2'>Blog</button></Link>
                <button className="pr-4">
                    <FaHeart className='text-rose-500 text-lg' />
                </button>
                <button className="text-base font-semibold bg-white rounded-full p-1">
                    {user?.displayName.slice(0, 2)}
                </button>
            </div>
        </div>
    );
};

export default BlogNav;