import React from 'react'
import img2 from"../assets/img2.png"
import './NewsBoard.css'
import img3 from "../assets/img3.png"
import img9 from "../assets/img9.png"
const url = "https://demo.tagdiv.com/newspaper_pro/wordpress-news-magazine-charts-the-most-chic-and-fashionable-women-of-new-york-city/";

const NewsBoard = () => {
  const handleImageClick = () =>{
    window.open(url, "_blank")
  };
   return (
    <><button type="button" className="btn btn-dark">Trending Now</button>
    <p ><strong className="pi">Another Big Apartment Project Slated for Broad Ripple Company</strong></p>
    <img onClick = {handleImageClick} src = {img2} className = "image1"alt='Image'/>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<img src = {img3} className = "image2"alt='Image'/>



</>

  )
}

export default NewsBoard
