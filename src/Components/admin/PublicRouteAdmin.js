import React from 'react'
import { Navigate } from 'react-router-dom'

function AdminPublicRoute({children}) {
    if(localStorage.getItem("adminemail") && localStorage.getItem("adminname")){
        return <Navigate to="/adminHome" />
    }else{
        return children;
    }
}

export default AdminPublicRoute
