import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzasWings } from "../actions/pizzawingActions";
//import pizzaswings from "../pizzaswingsdata";
import PizzaWing from "../components/PizzaWing";

export default function Homescreen() {
  const dispatch = useDispatch();

  const pizzaswingsstate = useSelector(
    (state) => state.getAllPizzasWingsReducers
  );

  const { pizzaswings, error, loading } = pizzaswingsstate;

  useEffect(() => {
    dispatch(getAllPizzasWings());
  }, []);

  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <h1>Loading</h1>
        ) : error ? (
          <h1>System Failure</h1>
        ) : (
          pizzaswings.map((pizzawing) => {
            return (
              <div className="col-md-3 m-3" key={pizzawing._id}>
                <div>
                  <PizzaWing pizzawing={pizzawing} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
