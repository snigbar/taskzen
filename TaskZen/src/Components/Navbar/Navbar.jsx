import React, { useContext } from 'react'
import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProvider'

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)
 

  return (
    <div className='container'>

  <div id="navigation-bar">
    <nav>
      <ul>
        <li><Link to='/' id="logo">TaskZen</Link></li>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addtask'>Add Task</NavLink></li>
        <li><NavLink to='/mytask'>My Tasks</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
       {user? <li><button to='/logout' onClick={logOut} className='btn-logout'>Logout</button> <span className='username'>Welcome, {user.displayName}</span></li>:<li><NavLink to='/login'>LogIn</NavLink></li>}
      </ul>
    </nav>
  </div>
  </div>
 
  )
}

export default Navbar