import {  ScaleLoader } from "react-spinners";


const Loader = ({smallHeight}) => {
    return (
        <div className={`${smallHeight ? 'h-[250px]':'h-[70vh]'}
         flex flex-col justify-center items-center`}>
            <ScaleLoader height={100} color="#36d7b7" />
        </div>
    );
};

export default Loader;