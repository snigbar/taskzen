import React from 'react'
import { useContext } from 'react'
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Providers/AuthProvider';
import moment from 'moment/moment';
import Swal from 'sweetalert2';



const AddTask = () => {
  // date
  var date = moment();
  var currentDate = date.format('YYYY-MM-DD');

  const {user} = useContext(AuthContext)

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: user.displayName,
      email: user.email,
      date: currentDate
    }
  });

  const onSubmit = data => {
  const task = {
    name: data.name,
    email: data.email,
    date: data.date,
    task: data.task
  }

  // adding task
  fetch('https://taskzen-mu.vercel.app/api/post', {
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body: JSON.stringify(task)
  }).then(res => res.json()).then(res=> {
    if(res.added){
      reset()
        Swal.fire({
            title: `${res.message}`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
    }
  })
};

  return (
    <div className="register">
 

    <div className="f">
      <h1 className="heading-1">Add Task</h1>
      <p className="subtext">Add Your Task</p>
    </div>
    
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
    <div className="form--group">
      <div className="form--group--elements">
        <div className="form--group--elements__action">
          <label>
            <span className="f">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="f" {...register("name", { required: true })}/>
        {errors.name && <span className="error">Name is required</span>}
        </div>
        <div className="form--group--elements__action">
          <label>
            <span className="f">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="f" {...register("email", { required: true })} readOnly/>
        {errors.email && <span className="error">Email is required</span>}
        </div>
        <div className="form--group--elements__action">
          <label>
            <span className="f">Date</span>
          </label>
          <input type="date" placeholder="date" name="date" className="f" 
              {...register("date", {
                required: true
            })} min={currentDate}/>
        </div>

        <div className="form--group--elements__action">
          <label>
            <span className="f">Task Destails</span>
          </label>
          <textarea rows="4" type="text" placeholder="task details (100 characters max)" name="task" maxLength={100}
              {...register("task", {
                required: true
            })} style={{resize: 'none'}}/>
        {errors.task?.type === 'required' && <p className="error">task details is required</p>}
        </div>
     
          <button className="btn-primary" type='submit'>Add Task</button>
         
       
 
      </div>
    </div>
    </form>


  
</div>
  )
}

export default AddTask