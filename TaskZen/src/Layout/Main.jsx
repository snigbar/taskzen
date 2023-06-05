import React from 'react'
import  './Main.scss'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'

const Main = () => {
  return (
    <div  className='main'>
    <Navbar></Navbar>
    <Outlet></Outlet>
    </div>
  )
}

export default Main