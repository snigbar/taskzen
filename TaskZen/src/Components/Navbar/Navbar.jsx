import React from 'react'
import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container'>

  <div id="navigation-bar">
    <nav>
      <ul>
        <li><Link to='/' id="logo">TaskZen</Link></li>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/alltask'>All Tasks</NavLink></li>
        <li><NavLink to='/addtask'>Add Task</NavLink></li>
        <li><NavLink to='/mytask'>My Tasks</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
        <li><NavLink to='/login'>LogIn</NavLink></li>
      </ul>
    </nav>
  </div>
  </div>
 
  )
}

export default Navbar