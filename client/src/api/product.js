

import axiosSecure from "."

export const addProduct = async productData =>{
    const {data} = await axiosSecure.post('/product', productData)
    return data
}

export const updateProduct = async (id, productData) =>{
    const {data}= await axiosSecure.patch(`/product/${id}`, productData)
    return data;
}

export const updateViews = async (id, views)=>{   
    const {data} = await axiosSecure.patch(`/updateViews/${id}`, views)   
    return data;
}

export const updateSales = async (id, sales)=>{   
    const {data} = await axiosSecure.patch(`/updateSales/${id}`, sales)   
    return data;
}






