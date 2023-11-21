import React from 'react'
import {Navigate} from "react-router-dom";

function ProtectedDocRoute({children}) {
  if(localStorage.getItem("demail")){
    return children
  }else{
    return <Navigate to="/dlogin" />
  }
}

export default ProtectedDocRoute
