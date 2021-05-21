import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPizzaWing, getPizzaWingById } from "../actions/pizzawingActions";
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";
export default function Editpizzawing({ match }) {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [smallprice, setsmallprice] = useState();
  const [mediumprice, setmediumprice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const getpizzawingbyidstate = useSelector((state) => state.getPizzaWingByIdReducer);

  const { pizzawing, error, loading } = getpizzawingbyidstate;

  const editpizzawingstate = useSelector((state) => state.editPizzaWingReducer)
  const {editloading , editerror , editsuccess} = editpizzawingstate;

  useEffect(() => {

    if(pizzawing)
    {
        if(pizzawing._id==match.params.pizzawingid)
        {
            setname(pizzawing.name)
            setdescription(pizzawing.description)
            setcategory(pizzawing.category)
            setsmallprice(pizzawing.prices[0]['small'])
            setmediumprice(pizzawing.prices[0]['medium'])
            setlargeprice(pizzawing.prices[0]['large'])
            setimage(pizzawing.image)
        }
        else{
            dispatch(getPizzaWingById(match.params.pizzawingid));
        }
        
    }
    else{
        dispatch(getPizzaWingById(match.params.pizzawingid));
    }



  }, [pizzawing , dispatch]);

  function formHandler(e) {
    e.preventDefault();

    const editedpizzawing = {
      _id : match.params.pizzawingid,
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

    dispatch(editPizzaWing(editedpizzawing))
  }

  return (
    <div>
    
     

      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
      <h1>Edit Pizza & Wing</h1>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {editsuccess && (<Success success='Pizza & Wing details edited successfully'/>)}
        {editloading && (<Loading />)}

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
            Edit Pizza
          </button>
        </form>
      </div>
    </div>
    );  
  }
