import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
// import AboutUs from "./components/AboutUs/AboutUs";
// import ContactUs from "./components/ContactUs/ContactUs";
import CategoryCard from "../Card/CategoryCard";
import Login from "../SignIN_UP/Login";
import Signup from "../SignIN_UP/Signup";
// import Register from "./components/SignIN_UP/Register";

function Routing() {
    return (
        <Router>
            <div>
                <Route path="/"  component={Dashboard} />
                <Route path='/login' component={Login}/>    
                <Route path="/register" component={Signup}/>
                <Route path="/category/:id" component={CategoryCard}/>
            </div>
        </Router>
    )
}

export default Routing
