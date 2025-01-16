export const setLocalCart = (cartItem) => {
    const previousCart = localStorage.getItem("deluxCart");
    if (previousCart) {
        const cartArray = JSON.parse(previousCart) || [];
        const uploadCart = [...cartArray, cartItem]
        localStorage.setItem('deluxCart', JSON.stringify(uploadCart))

    } else {
       
        localStorage.setItem('deluxCart', JSON.stringify([cartItem]))


    }

}

export const addToLocalCart = (cartItem) => {
    const previousCart = localStorage.getItem("deluxCart");
    if (previousCart) {
        const cartArray = JSON.parse(previousCart) || [];
        const uploadCart = [...cartArray, cartItem]
        localStorage.setItem('deluxCart', JSON.stringify(uploadCart))  
       

    } else {
        const upLoadCart = [cartItem]
        localStorage.setItem('deluxCart', JSON.stringify(upLoadCart))
        
       
    }
}