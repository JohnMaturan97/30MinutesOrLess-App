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

export const filteredPizzasWings=(searchkey , category)=>async dispatch=>{

  
    dispatch({type:'GET_PIZZASWINGS_REQUEST'})

    try {
        var filteredPizzasWings;
        const response = await axios.get('/api/pizzaswings/getallpizzaswings')
        filteredPizzasWings = response.data.filter(pizzawing=>pizzawing.name.toLowerCase().includes(searchkey))
         
        if(category!=='all')
        {
            filteredPizzasWings = response.data.filter(pizzawing=>pizzawing.category.toLowerCase()===category)

        }
        dispatch({type:'GET_PIZZASWINGS_SUCCESS' , payload : filteredPizzasWings})
    } catch (error) {
        dispatch({type:'GET_PIZZASWINGS_FAILED' , payload : error})
    }

}