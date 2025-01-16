import axiosSecure from "."

export const addShopByCategory = async itemData =>{
    const {data} = await axiosSecure.post('/shopbycategory', itemData)
    return data
}

export const addBanner = async itemData =>{
    const {data} = await axiosSecure.post('/banners', itemData)
    return data
}