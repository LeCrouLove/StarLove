import React from 'react';
import Start from '../startbtn.png';
import Quit from '../abort.jpeg';
import '../btn.css'

export const StartBtn = ({ handleCall }) => <img onClick={() => handleCall()} className="startBtn" src={Start} alt="creepy dude masturbating in starship"></img>
export const QuitBtn = ({ hangUpCall }) => <img onClick={() => hangUpCall()} className="startBtn" src={Quit} alt="creepy dude stoping masturbating"></img>
