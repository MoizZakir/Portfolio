import React, { useEffect } from 'react'
import '../../Styles/intro.css'

import img from '../../assets/moiz3.png'
import Aos
 from 'aos'
import 'aos/dist/aos.css'
const Intro = () => {
  useEffect(()=>{
    Aos.init({duration:'1000',delay:"500" })
},[])
  return (
    <div className='main'>
      <div className='first' style={{padding:'50px'}}>
     
   
       <h3 className='text' style={{color:'white'}} data-aos="fade-right" duration='1s' data-aos-once={false}>Hi ,there this is M. <span style={{color:'orange'}}> Moiz Zakir</span></h3>
       <p className='desc' data-aos="fade-up" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quaerat quam obcaecati 
             aspernatur fugiat corporis nemo voluptatibus, 
                 consequatur eius rem ducimus sint quae accusantium ratione delectus eum rerum et impedit.</p>
       </div>
       <div style={{flex:2 ,padding:"0px" }}>

       <img  className='pic'  src={img}alt="" /></div>
       
       
    </div>
  )
}

export default Intro