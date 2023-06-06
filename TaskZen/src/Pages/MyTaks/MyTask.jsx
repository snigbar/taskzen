import React, { useContext, useEffect, useState } from 'react'
import './MyTask.scss'
import { FaRegEdit,FaRegTrashAlt } from "react-icons/fa";
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Swal from 'sweetalert2';


const MyTask = () => {

  const {user} = useContext(AuthContext)
  const [myTasks, setMyTasks] = useState([])
  const [refetch, setRefetch] = useState(false)
  
  const today = moment();
  const compareDate = (date) => {
        const difference = moment(date).diff( today, "days" )
        return difference
  }

  const url = `http://localhost:5000/api/mytask/?email=${user.email}`
  useEffect(()=>{
    fetch(url).then(res => res.json()).then(data=> {
    console.log(data)
    setMyTasks(data)
  })
  },[url,refetch])

  const handleDelete = (id) =>{

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

      fetch(`http://localhost:5000/api/mytask/${id}`,{
      method: "DELETE"
      }).then(res => res.json()).then(data=> {
      setRefetch(!refetch)
      }).then(()=>{
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      })

      }
    })
    
  }

  return (

    <section className='task'>
    <div className="home--content">
    <h1 className='heading-1'>My Tasks</h1>
    <p className='subtext'>Effortlessly manage and access all your tasks</p>
    </div>

    <table className='task--section'>
    {/* heading */}
    <thead>
    <tr className="thead">
      <td>Name</td>
      <td>email</td>
      <td>Date</td>
      <td className='task-details'>Task Details</td>
      <td>update</td>
      <td>delete</td>
    </tr>
    </thead>
{/* table data */}
{myTasks.length > 0 ? <tbody>
 {  myTasks.map(task => <tr className="tbody" key={task._id}>
      <td>{task.name}</td>
      <td>{task.email}</td>
      <td>{task.date}</td>
      <td className='task-details'>
      {task.task} 
      </td>
     {compareDate(task.date) < 0?  <td><p className='past-tasks'>Past-date tasks unmodifiable</p></td>:<td><Link to={`/update/${task._id}`}><button className='icon-update'><FaRegEdit /> Update</button></Link></td> }
      <td><button className='icon-trash'  onClick={() => handleDelete(task._id)}><FaRegTrashAlt />Delete</button></td>
    </tr>)}
    </tbody>
   :
   <tbody><tr style={{display:'flex', justifyContent:"center"}}><Link to="/addtask" className='btn-primary'>Add Tasks</Link></tr></tbody> 
    
    }
   
    
   
    </table>
    
    </section>
  )
}

export default MyTask