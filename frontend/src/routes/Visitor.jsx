import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "../pages/AdiminLogin";
import Home from "../pages/Home";

const v_r_Arr = [
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/AdminLogin',
        element:<AdminLogin/>
    },
   
]

function Visitor() {
  return (
    <Routes>
      {
        v_r_Arr.map( route => (
            <Route to= {route.path} element= {route.element}></Route>
        ))
      }
    </Routes>
  );
}

export default Visitor;
