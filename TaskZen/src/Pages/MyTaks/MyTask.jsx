import React, { useContext, useEffect, useState } from 'react'
import './MyTask.scss'
import { FaRegEdit,FaRegTrashAlt } from "react-icons/fa";
import { AuthContext } from '../../Providers/AuthProvider';


const MyTask = () => {

  const {user} = useContext(AuthContext)
  const [myTasks, setMyTasks] = useState([])
  const [refetch, setRefetch] = useState(false)

  const url = `http://localhost:5000/api/mytask/?email=${user.email}`
  useEffect(()=>{
    fetch(url).then(res => res.json()).then(data=> {
    console.log(data)
    setMyTasks(data)
  })
  },[url,refetch])

  const handleDelete = (id) =>{
    fetch(`http://localhost:5000/api/mytask/${id}`,{
      method: "DELETE"
    }).then(res => res.json()).then(data=> {
      console.log(data)
      setRefetch(!refetch)
    })
    
  }

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
      <td>Date</td>
      <td className='task-details'>Task Details</td>
      <td>update</td>
      <td>delete</td>
    </tr>
    
{/* table data */}
   {myTasks.map(task => <tr className="tbody" key={task._id}>
      <td>{task.name}</td>
      <td>{task.email}</td>
      <td>{task.date}</td>
      <td className='task-details'>
      {task.task} 
      </td>
      <td ><button className='icon-update'><FaRegEdit /> Update</button></td>
      <td><button className='icon-trash'  onClick={() => handleDelete(task._id)}><FaRegTrashAlt />Delete</button></td>
    </tr>)}
   
    
   
    </table>
    
    </section>
  )
}

export default MyTask