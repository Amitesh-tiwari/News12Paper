import React from 'react'
import './Header.css'
import img1 from"../assets/img1.png"

const Header = () => {
  return (
    <div>
      <h1><bold> News 12 PAPER</bold></h1> <img src = {img1} alt='Image'/>
      <p>The art of publishing</p>
    </div>
  )
}

export default Header
