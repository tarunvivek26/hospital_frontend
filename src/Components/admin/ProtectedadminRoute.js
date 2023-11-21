import React from 'react'
import {Navigate} from "react-router-dom";

function ProtectedadminRoutes({children}) {
  if(localStorage.getItem("adminname") && localStorage.getItem("adminemail")){
    return children
  }else{
    return <Navigate to="/" />
  }
}

export default ProtectedadminRoutes
