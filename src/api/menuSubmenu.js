import axiosSecure from ".";

export const addMenu = async menuData=>{
    const {data}= await axiosSecure.post('/menu', menuData)    
    return data;
}

export const addSubMenu = async SubMenuData=>{
    const {data}= await axiosSecure.post('/submenu', SubMenuData)    
    return data;
}

export const deleteMenu = async menuData=>{
    const {data} = await axiosSecure.delete('/menu', menuData)
    return data;
}
export const updateSubmenu = async (id, subMenuData) =>{
    const {data}= await axiosSecure.patch(`/submenu/${id}`, subMenuData)
    console.log(data)
    return data;
}