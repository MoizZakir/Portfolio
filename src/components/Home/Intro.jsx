import React, { useEffect } from 'react'
import '../../Styles/intro.css'

import img from '../../assets/moiz3.png'
import Aos
 from 'aos'
import 'aos/dist/aos.css'
import Rightbar from '../Rightbar'
import { TypeAnimation } from 'react-type-animation'
const Intro = ({mode,setMode}) => {
  useEffect(()=>{
    Aos.init({duration:'1000',delay:"500" })
},[])
  return (
   
    <div className='main'>
      <Rightbar mode={mode} setMode={setMode}/>
    <div
    className='content'>
      <div className='greet'>
        <h2  data-aos="zoom-out" style={{textAlign:'center'}}>Welcome Here,</h2>
      </div>
      <div className='introduction'>
        <div style={{display:'flex',alignItems:'center' ,gap:"5px"}}>
<h4>This is M.Moiz Zakir </h4> <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Frontend Developer',
    1000,
    'ReactJs Developer',
    1000,
    'Backend Developer',
    1000,
    'MernStack Developer',
    1000,
  ]}
  speed={50}
  style={{ fontSize: '1em' ,color:'yellow' }}
  repeat={Infinity}
/></div>
      </div>
    </div>

    </div>
  )
}

export default Intro