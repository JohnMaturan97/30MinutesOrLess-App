import axios from "axios";
export const getAllPizzasWings = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZASWINGS_REQUEST" });

  try {
    const response = await axios.get("/api/pizzaswings/getallpizzaswings");
    console.log(response);
    dispatch({ type: "GET_PIZZASWINGS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZASWINGS_FAILED", payload: error });
  }
};

export const getPizzaWingById = (pizzawingid) => async (dispatch) => {
  dispatch({ type: "GET_PIZZWINGABYID_REQUEST" });

  try {
    const response = await axios.post("/api/pizzaswings/getpizzawingbyid", {
      pizzawingid,
    });
    console.log(response);
    dispatch({ type: "GET_PIZZAWINGBYID_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_PIZZAWINGBYID_FAILED", payload: error });
  }
};

export const filteredPizzasWings =
  (searchkey, category) => async (dispatch) => {
    dispatch({ type: "GET_PIZZASWINGS_REQUEST" });

    try {
      var filteredPizzasWings;
      const response = await axios.get("/api/pizzaswings/getallpizzaswings");
      filteredPizzasWings = response.data.filter((pizzawing) =>
        pizzawing.name.toLowerCase().includes(searchkey)
      );

      if (category !== "all") {
        filteredPizzasWings = response.data.filter(
          (pizzawing) => pizzawing.category.toLowerCase() === category
        );
      }
      dispatch({
        type: "GET_PIZZASWINGS_SUCCESS",
        payload: filteredPizzasWings,
      });
    } catch (error) {
      dispatch({ type: "GET_PIZZASWINGS_FAILED", payload: error });
    }
  };

export const addPizzaWing = (pizzawing) => async (dispatch) => {
  dispatch({ type: "ADD_PIZZAWING_REQUEST" });
  try {
    const response = await axios.post("/api/pizzaswings/addpizzawing", {
      pizzawing,
    });
    console.log(response);
    dispatch({ type: "ADD_PIZZAWING_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_PIZZAWING_FAILED", payload: error });
  }
};

export const editPizzaWing = (editedpizzawing) => async (dispatch) => {
  dispatch({ type: "EDIT_PIZZAWING_REQUEST" });
  try {
    const response = await axios.post("/api/pizzaswings/editpizzawing", {
      editedpizzawing,
    });
    console.log(response);
    dispatch({ type: "EDIT_PIZZAWING_SUCCESS" });
    window.location.href = "/admin/pizzaswingslist";
  } catch (error) {
    dispatch({ type: "EDIT_PIZZAWING_FAILED", payload: error });
  }
};

export const deletePizzaWing = (pizzawingid) => async (dispatch) => {
  try {
    const response = await axios.post("/api/pizzaswings/deletepizzawing", {
      pizzawingid,
    });
    alert("Pizza & Wing Deleted Successfully");
    console.log(response);
    window.location.reload();
  } catch (error) {
    alert("Something went wrong");
    console.log(error);
  }
};
