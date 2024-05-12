import React from 'react'
import Background from "./Components/Background"
import Foreground from "./Components/Foreground"

function App() {
  return (
    <React.Fragment>
      <div className='relative w-full h-screen bg-zinc-800 overflow-hidden'>
        <Background />
        <Foreground />


      </div>

    </React.Fragment>
  )
}

export default App
