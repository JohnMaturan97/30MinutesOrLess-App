import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {filteredPizzasWings} from "../actions/pizzawingActions";
export default function Filter() {
    const dispatch = useDispatch()
    const[searchkey , setsearchkey] = useState('')
    const[category , setcategory] = useState('all')
    return (
        <div className='container'>
            <div className="row justify-content-center shadow-lg p-3 mb-4 bg-white rounded">

                    <div className="col-md-3 w-40">
                      <input
                      onChange={(e)=>{setsearchkey(e.target.value)}}
                      value={searchkey} type="text" className="form-control w-100" placeholder="Search for any Pizzas or Wings"/>
                    </div>
                    <div className="col-md-3 w-40">
                        <select className="form-control w-60 mt-2" value={category} onChange={(e)=>setcategory(e.target.value)}>
                            <option value="all">All</option>
                            <option value="universe best pizzas">Universe Best Pizzas</option>
                            <option value="vegeterian pizzas">Vegeterian Pizzas</option>
                            <option value="famous wings">Famous Wings</option>
                        </select>
                    </div>
                    <div className="col-md-3 w-40">
                       <button className='btn w-100 mt-2' onClick={()=>{dispatch(filteredPizzasWings(searchkey , category))}}>FILTER</button>
                    </div>

            </div>
        </div>
    )
}