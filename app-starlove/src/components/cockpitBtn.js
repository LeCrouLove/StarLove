import React from 'react';
import Start from '../startbtn.png';
import '../btn.css'

const StartBtn = ({ handleChat }) => <img onClick={() => handleChat()} className="startBtn" src={Start} alt="creepy dude masturbating in starship"></img>

export default StartBtn
