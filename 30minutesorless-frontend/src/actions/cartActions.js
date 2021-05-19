export const addToCart = (pizzawing, quantity, varient) => (dispatch, getState) => {

    var cartItem = {
        name : pizzawing.name,
        _id : pizzawing._id,
        image : pizzawing.image,
        varient : varient,
        quantity : Number (quantity),
        prices : pizzawing.prices,
        price : pizzawing.prices[0][varient]*quantity
    }

    if(cartItem.quantity > 12) 
    {
        alert('You have reached the maximum limit of available purchases for this Item.')
    } else {
        if(cartItem.quantity < 1) 
        {
            dispatch ({type: 'DELETE_FROM_CART', payload : pizzawing})
        } else {
           dispatch({ type: 'ADD_TO_CART', payload : cartItem})   
        } 
    }
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))

}

export const deleteFromCart = (pizzawing) => (dispatch, getState) => {

    dispatch ({type: 'DELETE_FROM_CART', payload : pizzawing})
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}