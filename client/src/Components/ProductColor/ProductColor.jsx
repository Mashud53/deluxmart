

const ProductColor = ({ color1, color2, color3, color, setColor }) => {
    return (
        <>
        {
            color1 || color2 || color3 ?
            <div className="flex items-center gap-2 mt-8">
                <h2 className="">Color:</h2>
            {
                color1?.length > 0 &&
                <div
                    onClick={() => setColor(color1)}
                    className={color1 === color ? "px-2 py-1 border-2 border-neutral-300 cursor-pointer bg-neutral-300 font-semibold" : "px-2 py-1 border-2 border-neutral-300 cursor-pointer"}>
                    {color1}
                </div>

            }
            {
                color2?.length > 0 &&
                <div
                    onClick={() => setColor(color2)}
                    className={color2 === color ? "px-2 py-1 border-2 border-neutral-300 cursor-pointer bg-neutral-300 font-semibold" : "px-2 py-1 border-2 border-neutral-300 cursor-pointer"}>{color2}</div>

            }
            {
                color3?.length > 0 &&
                <div
                    onClick={() => setColor(color3)}
                    className={color3 === color ? "px-2 py-1 border-2 border-neutral-300 cursor-pointer bg-neutral-300  font-semibold" : "px-2 py-1 border-2 border-neutral-300 cursor-pointer"}>
                    {color3}
                </div>
            }
        </div>
        :<></>
        }
        </>
    );
};

export default ProductColor;