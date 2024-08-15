import React from 'react'
import Navbar from '../src/components/Home/Navbar'
import '../src/Styles/home.css'
import Intro from '../src/components/Home/Intro'

const Home = () => {
  return (
    <div className='mainHome'>
        <Navbar/>
        <Intro/>
    </div>
  )
}

export default Home