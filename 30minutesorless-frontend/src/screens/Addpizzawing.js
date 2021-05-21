import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizzaWing } from "../actions/pizzawingActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";
export default function Addpizzawing() {
  const [name, setname] = useState("");
  const [smallprice, setsmallprice] = useState();
  const [mediumprice, setmediumprice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const dispatch = useDispatch();

  const addpizzaswingstate = useSelector((state) => state.addPizzaWingReducer);
  const { success, error, loading } = addpizzaswingstate;
  function formHandler(e) {
    e.preventDefault();

    const pizzawing = {
      name,
      image,
      description,
      category,
      prices: {
        small: smallprice,
        medium: mediumprice,
        large: largeprice,
      },
    };

    console.log(pizzawing);
    dispatch(addPizzaWing(pizzawing));
  }

  return (
    <div>
      <div className="text-left shadow-lg p-3 mb-5 bg-grey rounded">
        <h1>Add New Items Form</h1>

        {loading && <Loading />}
        {error && <Error error="System Failure, Try Again!" />}
        {success && <Success success="New Pizza and Wing added successfully" />}

        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="small varient price"
            value={smallprice}
            onChange={(e) => {
              setsmallprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="medium varient price"
            value={mediumprice}
            onChange={(e) => {
              setmediumprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="large varient price"
            value={largeprice}
            onChange={(e) => {
              setlargeprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="image url"
            value={image}
            onChange={(e) => {
              setimage(e.target.value);
            }}
          />
          <button className="btn mt-3" type="submit">
            One Click Away!
          </button>
        </form>
      </div>
    </div>
  );
}
