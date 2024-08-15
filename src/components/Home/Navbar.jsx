import React, { useEffect, useState } from 'react'
import '../../Styles/navbar.css'
import { ImMenu3, ImMenu4 } from 'react-icons/im'
import { RxCrossCircled } from 'react-icons/rx'

const Navbar = () => {
    const [display,setDisplay]=useState(false)
    
    useEffect(()=>{console.log('moiz')},[])
  return (
    <div className='navbar'>
        <div className='logo'>
            <h3>M.Moiz Zakir</h3>
        </div>
        <div className='menue'>
        <ul>
            <li >Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>

        </div>
        <div className='menueButton'>
            
        {!display&&<ImMenu3 size={40} color='' onClick={()=>setDisplay(true)}/>}
        {display&&<ImMenu4 size={40} color='' onClick={()=>setDisplay(false)}/>}

        </div>
        <div className='sidebar' style={{display:display?'flex':"none"}}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        <span style={{marginRight:"60px", marginTop:"12px", color:"red", fontWeight:800 ,cursor:'pointer'}} onClick={()=>setDisplay(false)}><RxCrossCircled size={30} /></span>

        </div>

    </div>
  )
}

export default Navbar