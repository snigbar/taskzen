import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import './spinner.scss'
import { AuthContext } from '../Providers/AuthProvider'

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className="spinner">
        <span className="spinner-inner-1"></span>
        <span className="spinner-inner-2"></span>
        <span className="spinner-inner-3"></span>
      </div>
    }
    if(user){
        return children
    }
  return (
    <Navigate to='/login' state={{from:location}} replace></Navigate>
  )
}

export default PrivateRoute