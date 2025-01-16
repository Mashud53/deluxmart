


const ProductStorage = ({storage1, storage2, storage3, price1, price2, price3, currentPrice1,currentPrice2,currentPrice3, setPrice, previousPrice1, previousPrice2, previousPrice3, setPreviousPrice, storage, setStorage}) => {

    const storagePrice1=()=>{
        if(currentPrice1 >0){
            setPrice(currentPrice1)
            setStorage(storage1)
            setPreviousPrice(previousPrice1)
        }else{
            setPrice(price1)
            setStorage(storage1)
            setPreviousPrice(previousPrice1)
        }
    }

    const storagePrice2=()=>{
        if(currentPrice2 >0){
            setPrice(currentPrice2)
            setStorage(storage2)
            setPreviousPrice(previousPrice2)
        }else{
            setPrice(price2)
            setStorage(storage2)
            setPreviousPrice(previousPrice2)
        }

    }
    const storagePrice3=()=>{
        if(currentPrice3 >0){
            setPrice(currentPrice3)
            setStorage(storage3)
            setPreviousPrice(previousPrice3)
        }else{
            setPrice(price3)
            setStorage(storage3)
            setPreviousPrice(previousPrice3)
        }

    }
    
    return (
        <>
        {
            storage1?.length>0 || storage2?.length > 0 || storage3?.length > 0 ? <div className="mt-8">
                <h1>Storage</h1>
                <div className="flex justify-start items-center gap-2">
                    {
                        storage1?.length > 0 && 
                        <div onClick={storagePrice1} className={storage === storage1 ? "px-2 py-1 border-2 border-neutral-200 rounded-md cursor-pointer bg-neutral-200 font-semibold":"px-2 py-1 border-2 border-neutral-200 rounded-md cursor-pointer"}>{storage1}
                            
                        </div>
                    }
                    {
                        storage2?.length > 0 && 
                        <div onClick={storagePrice2} 
                        className={storage === storage2 ? "px-2 py-1 border-2 border-neutral-200 rounded-md cursor-pointer bg-neutral-200 font-semibold":"px-2 py-1 border-2 border-neutral-200 rounded-md cursor-pointer"}>
                            {storage2}
                        </div>
                    }

                    {
                        storage3?.length > 0 && 
                        <div onClick={storagePrice3}
                        className={storage === storage3 ? "px-2 py-1 border-2 border-neutral-200 rounded-md cursor-pointer bg-neutral-200 font-semibold":"px-2 py-1 border-2 border-neutral-200 rounded-md cursor-pointer"}>
                            {storage3}
                        </div>
                    }

                </div>
            </div>:""
        }
        </>
        
    );
};

export default ProductStorage;