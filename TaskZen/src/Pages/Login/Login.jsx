import React, { useContext, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.scss'
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

  const {signIn, signInWithGoogle} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/";
  const fromPrivate =location.state?.from?.pathname.includes('/mytask') || location.state?.from?.pathname.includes('/addtask');


  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    signIn(data.email,data.password)
      .then(result => {
        const user = result.user;
        reset()
        Swal.fire({
            title: `Welcome back, ${user?.displayName}`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
        navigate(from, { replace: true });
    })
  };

  // signIn with Google
  const handleGoogleSignIn = (e) => {
    e.preventDefault()
    signInWithGoogle()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
        }) .then(() => {
          navigate(from, { replace: true });
      })
}

// checking from private route
useEffect(()=>{
  if(fromPrivate){
    Swal.fire({
      title: `You need to login First`,
      showClass: {
          popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
      }
  })}
},[])

   
  return (
<div className="login">


  <div className="f">
    <h1 className="heading-1">Login</h1>
    <p className="subtext">Login To Your Account and Start</p>
  </div>
  
  <form onSubmit={handleSubmit(onSubmit)} className='form'>
  <div className="form--group">
    <div className="form--group--elements">
      <div className="form--group--elements__action">
        <label>
          <span className="f">Email</span>
        </label>
        <input type="email" placeholder="email" name="email" className="f" {...register("email", { required: true })}/>
      {errors.email && <span className="f">Email is required</span>}
      </div>
      <div className="form--group--elements__action">
        <label>
          <span className="f">Password</span>
        </label>
        <input type="password" placeholder="password" name="password" className="f" 
        {...register("password", {
          required: true,
          minLength: 6,
          maxLength: 20
      })}/>
      {errors.password?.type === 'required' && <p className="error">Password is required</p>}
      {errors.password?.type === 'minLength' && <p className="error">Password must be 6 characters</p>}
      {errors.password?.type === 'maxLength' && <p className="error">Password must be less than 20 characters</p>}
      </div>



       <div className="flex-btn">
          <button className="btn-primary" type='submit'>Login</button>
          <button className="btn-secondary" onClick={handleGoogleSignIn}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 48 48" class="abcRioButtonSvg"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
          Start With Google
          </button>
        </div>
      <div>
        <Link to='/register' type='submit'>Already have an account? Register</Link>
      </div>
     
    </div>
  </div>
  </form>



</div>
  );
}

export default Login