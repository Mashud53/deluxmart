import axiosSecure from ".";

export const quantityPlus = async (id, qty)=>{   
    const {data} = await axiosSecure.patch(`/qtyPlus/${id}`, qty)   
    return data;
}
export const quantityMinus = async (id, qty)=>{   
    const {data} = await axiosSecure.patch(`/qtyMinus/${id}`, qty)   
    return data;
}