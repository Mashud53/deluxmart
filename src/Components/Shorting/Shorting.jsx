
import { useNavigate, useSearchParams } from 'react-router-dom';
import qs from 'query-string'
import { shortingLaptop, shortingName } from './ShortingData';




const Shorting = ({allProduct, displayProduct, setDisplayProduct}) => {


    const [params, setParams] = useSearchParams();

    const navigate = useNavigate()
    // params.get('category')
    const selected = params.get('category')
  
    const handleClik = (label) => {
        console.log(label)

        
    
        let currnetQuery = {}
        if (params) {
            currnetQuery = qs.parse(params.toString())
            console.log(currnetQuery)
            const updatedQuery = { ...currnetQuery, category: label }
            const url = qs.stringifyUrl({
                url: '/',
                query: updatedQuery
            })
            navigate(url)
        }
    }



    return (
        <>
            <div className="w-20 bg-base-200 md:w-40 flex flex-col items-start justify-start font-catamaran text-xs md:text-base font-semibold  px-2 border-b-2">
                {shortingName?.map(item =>
                    <div
                        onClick={() => handleClik(item.label)}
                        className={` text-neutral-800 transition cursor-pointer `}
                        key={item.label}>
                        <div className='p-2 md:p-2'>
                            <li className={`list-none  ${selected === item.label ? "text-cyan-600 " : " text-black"} `}>{item.label}</li>
                        </div>
                    </div>)}
                    
                    {shortingLaptop?.map(item =>
                    <div
                        onClick={() => handleClik(item.label)}
                        className={` text-neutral-800 transition cursor-pointer `}
                        key={item.label}>
                        <div className='p-2 md:p-2'>
                            <li className={`list-none  ${selected === item.label ? "text-cyan-600 " : " text-black"} `}>{item.label}</li>
                        </div>
                    </div>)}


            </div>
           
            
        </>
    );
};

export default Shorting;