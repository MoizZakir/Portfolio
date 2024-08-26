import React, { useEffect } from 'react'
import '../../Styles/intro.css'

import img from '../../assets/moiz3.png'
import Aos
  from 'aos'
import 'aos/dist/aos.css'
import Rightbar from '../Rightbar'
import { TypeAnimation } from 'react-type-animation'
const Intro = ({ mode, setMode }) => {
  useEffect(() => {
    Aos.init({ duration: '1000', delay: "500" })
  }, [])
  return (

    <div className='main'>
      <Rightbar mode={mode} setMode={setMode} />
      <div
        className='content'>
        <div className='greet'>
          <h2 data-aos="zoom-out" style={{ color:'black', backgroundColor:'yellow', textAlign: 'center', fontSize: '30px', width:"200px", marginLeft:"15px"}}>Welcome Here,</h2>
        </div>
        <div className='introduction'>
          <div style={{ display: 'flex', fontSize: '28px', alignItems: 'center', gap: "8px", width: '100%' }}>
            <h4 style={{}} >This is <span style={{color:'purple'}}>M</span> .Moiz Zakir </h4>
            <TypeAnimation
              sequence={[

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
              style={{ fontSize: '1em', fontWeight:'bold', color: 'yellow', maxWidth: "max-content", }}
              repeat={Infinity}
            />
          </div>
          <h5 className='para' style={{  marginTop: '50px', fontSize: "20px", letterSpacing: '1px' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis dignissimos dicta excepturi
            ipsum praesentium optio delectus quae cum ullam cupiditate, eligendi repellendus mollitia
            rerum similique illum unde, facilis ut itaque?
          </h5>
          <button className='learnbtn' style={{
            backgroundColor: 'green', padding: '6px 12px',
            color: "white",
            outline:'none',
            border:'none',
            fontSize: '18px',
            borderRadius: "5px",
            fontWeight: 700,
            marginTop: "20px"
          }} >Learn more</button>
        </div>
      </div>

    </div>
  )
}

export default Intro