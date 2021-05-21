import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {getAllPizzasWings, deletePizzaWing } from "../actions/pizzawingActions";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
export default function PizzasWingslist() {
        const dispatch = useDispatch();
      
        const pizzaswingsstate = useSelector(
          (state) => state.getAllPizzasWingsReducers
        );
      
        const { pizzaswings, error, loading } = pizzaswingsstate;;
  useEffect(() => {
    dispatch(getAllPizzasWings());
  }, []);
  return <div>
    <b><h1>Pizzas & Wings List</h1></b>
    {loading && (<Loading/>)}
    {error && (<Error error='System Failure'/>)}

            <table  className='table table-bordered table-responsive-sm'>

            <thead className='thead-dark'>
                <tr>
                    <th>Name</th>
                    <th>Prices</th>
                    <th>Category</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {pizzaswings && pizzaswings.map(pizzawing=>{
    
                return <tr>
                    <td>{pizzawing.name}</td>
                    <td>
    
                       Small : ${pizzawing.prices[0]['small']} <br/>
                       Medium : ${pizzawing.prices[0]['medium']} <br/>
                       Large : ${pizzawing.prices[0]['large']}
                        
                    </td>
                    <td>{pizzawing.category}</td>
                    <td>
                        <i className='fa fa-trash m-1' onClick={()=>{dispatch(deletePizzaWing(pizzawing._id))}}></i>
                        <Link to={`/admin/editpizzawing/${pizzawing._id}`}><i className='fa fa-edit m-1'></i></Link>
                    </td>
                   
                </tr>
    
            })}
            </tbody>
    
        </table>
    
       
      </div>;
    }
