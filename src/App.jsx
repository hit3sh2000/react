import './App.css';
import React from 'react'
// import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
// import Dashboard from "./components/Dashboard/Dashboard";
// import TopNav from "./components/TopNav/TopNav";
// import Footer from "./components/Footer/Footer1";
// import AboutUs from "./components/AboutUs/AboutUs";
// import ContactUs from "./components/ContactUs/ContactUs";
// import UserCard from "./components/Card/UserCard";
// import Login from "./components/SignIN_UP/Login";
// import Register from "./components/SignIN_UP/Register";
import Routing from "./components/Routing/Routing";



function App() {
  return (
    <div className="App">
      {/* <TopNav/>
      <UserCard/>
      <Dashboard/>
      <Footer/> */}
      <Routing/>
    </div>
  );
}

export default App;
