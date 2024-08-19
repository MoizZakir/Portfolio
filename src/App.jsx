

import { useState } from 'react'
import Home from '../Pages/Home'

function App() {
  const [mode,setMode]=useState(false)


  return (
    <div style={{backgroundColor:!mode?'black':'white' ,transition:'backgroundColor',transitionDuration:"1s",color:mode?'black':'white'}} >
      <Home mode={mode} setMode={setMode}/>
     
    </div>
  )
}

export default App
