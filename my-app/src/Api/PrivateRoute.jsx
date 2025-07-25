import React from "react";
import { Children } from "react";
import { Navigate } from "react-router-dom";
const PrivateRoute=({children})=>{
    const token=localStorage.getItem('token');
    return token ? children : <Navigate to="/signup"/>
}
export default PrivateRoute