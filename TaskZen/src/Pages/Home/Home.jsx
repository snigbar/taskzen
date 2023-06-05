import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='home'>
      <div className="home--content">
      <h1 className='heading-1'>TaskZen - Stay organized and stay ahead</h1>
      <p className='subtext'>Simplify your life, achieve more. Effortlessly manage tasks, deadlines, and priorities in one place. Streamline productivity, stay organized, and reach your goals with ease</p>
      </div>
      <div>
      <Link to="/register" className='btn-secondary'>Register</Link>
      <Link to="/mytask" className='btn-primary'>Get Started</Link>
      </div>
      </section>
  )
}

export default Home