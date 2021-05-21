import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Addpizzawing from "./Addpizzawing";
import Orderslist from "./OrdersList";
import PizzasWingslist from "./PizzasWingsList";
import UsersList from "./UsersList"
import Editpizzawing from '../screens/Editpizzawing';

export default function Adminscreen() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

          <ul className="adminfunction">
            <li>
              <Link to={"/admin/userslist"} style={{ color: "white" }}>
                Users List
              </Link>
            </li>
            <li>
              <Link to={"/admin/pizzaswingslist"} style={{ color: "white" }}>
                Items List
              </Link>
            </li>
            <li>
              <Link to={"/admin/addpizzawing"} style={{ color: "white" }}>
                Add New Items
              </Link>
            </li>
            <li>
              <Link to={"/admin/orderslist"} style={{ color: "white" }}>
                Orders List
              </Link>
            </li>
          </ul>

          <Switch>
            <Route path="/admin" component={UsersList} exact />
            <Route path="/admin/userslist" component={UsersList} exact />
            <Route path="/admin/orderslist" component={Orderslist} exact />
            <Route path="/admin/pizzaswingslist" component={PizzasWingslist} exact />
            <Route path="/admin/addpizzawing" component={Addpizzawing} exact />
            <Route path="/admin/editpizzawing/:pizzawingid" component={Editpizzawing} exact />          
          </Switch>
        </div>
      </div>
    </div>
  );
}
