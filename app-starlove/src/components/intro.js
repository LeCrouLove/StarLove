import React from 'react'
import '../intro.css'

const StarWarsScroll = ({ content }) => ( 
  <div className="intro-star">
    <div className="fade"></div>
    <div className="star-wars">
      <div className="crawl">{content}</div>
    </div>
  </div>
)

const Intro = ({ text, title }) =>
  <StarWarsScroll content={
    <React.Fragment>
      <div className="title">
      <h1>Star Whores épisode X</h1>
      </div>
      {text.split('\n').map(line => <p>{line}</p>)}
    </React.Fragment>
  } />

export default Intro
