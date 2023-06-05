import React from 'react'
import './MyTask.scss'
import { FaRegEdit,FaRegTrashAlt } from "react-icons/fa";


const MyTask = () => {
  return (
    <section className='task'>
    <div className="home--content">
    <h1 className='heading-1'>My Tasks</h1>
    <p className='subtext'>You can manage see all your tasks and manage them</p>
    </div>

    <table className='task--section'>
    {/* heading */}
    
    <tr className="thead">
      <td>Name</td>
      <td>email</td>
      <td>date</td>
      <td style={{width:'20%'}}>Task Details</td>
      <td>update</td>
      <td>delete</td>
    </tr>
    
{/* table data */}
    <tr className="tbody">
      <td>Md.Akbar Alam</td>
      <td>akbarmhbc@gmail.com</td>
      <td>23/23/23</td>
      <td className='task-details' style={{height:"10rem", width:"30%"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique temporibus recusandae eaque commodi, totam veniam aut minus ut facere non, laborum quas, cumque assumenda quos qui esse accusamus optio est.
      </td>
      <td ><button className='icon-update'><FaRegEdit /> Update</button></td>
      <td><button className='icon-trash'><FaRegTrashAlt />Delete</button></td>
    </tr>
   
    
   
    </table>
    
    </section>
  )
}

export default MyTask