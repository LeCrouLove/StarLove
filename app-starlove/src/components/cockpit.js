import React from 'react'
import cockpitImg from '../cockpit.jpg'
import StartBtn  from './cockpitBtn.js'
import '../index.css'
import ChatWindow from './chatWindow.js' 


console.log(this.state)

const style = {
  backgroundImage:`url(${cockpitImg})`,
  backgroundSize:'cover',
  backgroundPosition:'center',
  height: '50vw',
}

const Cockpit =  ({handleChat}, props) =>  {
  return <div className="backgroundImg" style={style}>
    <StartBtn handleChat={handleChat}/>
  </div>
}



export default Cockpit
