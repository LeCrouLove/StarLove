import React from 'react'
import Chat from '../chatWindow.png'
import './windowChat.css'
import './questionAsk.css'

const HandleQuestion = ({ handleAnswer, ifyes, ifno, yes, no, text }) =>
    <div className="questionBloc">
      <img src={Chat} className="window" alt="chatWindow"></img>
      <p>{text}</p>
      <div className="content-answer">
      	<button className="question-btn" onClick={() => handleAnswer(ifyes)}>{yes}</button>
      	<button className="question-btn" onClick={() => handleAnswer(ifno)}>{no}</button>
    	</div>
    </div>

export default HandleQuestion
