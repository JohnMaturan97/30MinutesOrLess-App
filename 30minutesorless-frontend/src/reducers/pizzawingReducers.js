export const getAllPizzasWingsReducers = (
  state = { pizzaswings: [] },
  action
) => {
  switch (action.type) {
    case "GET_PIZZASWINGS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_PIZZASWINGS_SUCCESS":
      return {
        loading: false,
        pizzaswings: action.payload,
      };

    case "GET_PIZZASWINGS_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const getPizzaWingByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_PIZZAWINGBYID_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_PIZZAWINGBYID_SUCCESS":
      return {
        loading: false,
        pizzawing: action.payload,
      };
    case "GET_PIZZAWINGBYID_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const addPizzaWingReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PIZZAWING_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "ADD_PIZZAWING_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ADD_PIZZAWING_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const editPizzaWingReducer = (state = {}, action) => {
  switch (action.type) {
    case "EDIT_PIZZAWING_REQUEST":
      return {
        editloading: true,
        ...state,
      };
    case "EDIT_PIZZAWING_SUCCESS":
      return {
        editloading: false,
        editsuccess: true,
      };
    case "EDIT_PIZZAWING_FAILED":
      return {
        editerror: action.payload,
        editloading: false,
      };
    default:
      return state;
  }
};
