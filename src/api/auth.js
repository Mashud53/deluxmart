import axiosSecure from "."

// save user data in database 
export const saveUser = async user =>{
    const currentUser = {
        email:user.email,
        role:'guest',
        status: 'Verified'
    }
    const {data}= await axiosSecure.put(`/users/${user?.email}`, currentUser)
    return data
}

// get token from server
export const getToken = async email=>{
    const {data} = await axiosSecure.post('/jwt', email)
    console.log('Token get from server =====>', data)
    return data
}

// Clear token from browser
export const clearCookie = async ()=>{
    const {data} = await axiosSecure.get('/logout')
    console.log('Token get from server =====>', data)
    return data
}

// get user role 
export const getRole = async email =>{
    const {data} = await axiosSecure.get(`/user/${email}`)
    return data.role
}
// get user information 
export const getUser = async email =>{
    const {data} = await axiosSecure.get(`/user/${email}`)
    return data
}