import React from 'react'

// function Button({ onClick }) {
function Button({ text }) {
  return (
    // <button onClick={onClick= console.log("You clicked me!")}></button>
    <button>{ text }</button>
  )
}

export default Button
