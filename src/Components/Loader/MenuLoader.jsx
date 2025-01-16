import {  ClipLoader } from "react-spinners";

const MenuLoader = ({smallHeight}) => {
    return (
        <div className={`${smallHeight ? 'h-[250px]':'h-[70vh]'}
         flex flex-col justify-center items-center`}>
            <ClipLoader height={100} color="#36d7b7" />
        </div>
    );
};

export default MenuLoader;