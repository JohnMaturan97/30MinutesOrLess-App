import axios from 'axios';
export const getAllPizzasWings = () => async dispatch => {
    dispatch({type: 'GET_PIZZASWINGS_REQUEST'})

    try {
        const response = await axios.get('/api/pizzaswings/getallpizzaswings')
        console.log(response);
        dispatch({type: 'GET_PIZZASWINGS_SUCCESS', payload : response.data})
    } catch(error) {
        dispatch({type: 'GET_PIZZASWINGS_FAILED', payload : error})
    }

}