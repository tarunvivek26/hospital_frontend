import React from 'react'
import { Navigate } from 'react-router-dom'

function PublicRoute({children}) {
    if(localStorage.getItem("demail")){
        return <Navigate to="/docHome" />
    }else{
        return children;
    }
}

export default PublicRoute
