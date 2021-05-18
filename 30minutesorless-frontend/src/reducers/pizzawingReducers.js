export const getAllPizzasWingsReducers = (state ={pizzaswings : []}, action) => {
    
    switch(action.type)
    {
        case 'GET_PIZZASWINGS_REQUEST' : return {
            loading : true,
            ...state
        }
        case 'GET_PIZZASWINGS_SUCCESS' : return {
            loading : false,
            pizzaswings : action.payload
        }

        case 'GET_PIZZASWINGS_FAILED' : return {
            error : action.payload,
            loading : false
        }
        default : return state
    }
}