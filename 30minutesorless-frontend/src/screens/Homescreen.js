import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzasWings } from "../actions/pizzawingActions";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import Error from "../components/Error";
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
      <Filter />
      <div className="row justify-content-center">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="System Failure, Check Yo Self! LOLOL!" />
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
