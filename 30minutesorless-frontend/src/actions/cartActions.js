export const addToCart = (pizzawing, quantity, varient) => (dispatch, getState) => {

    var cartItem = {
        name : pizzawing.name,
        _id : pizzawing._id,
        image : pizzawing.image,
        varient : varient,
        quantity : quantity,
        prices : pizzawing.prices,
        price : pizzawing.prices[0][varient]*quantity
    }

    dispatch({ type: 'ADD_TO_CART', payload : cartItem})

    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))

}