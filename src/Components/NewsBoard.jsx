import React from 'react'
import img2 from"../assets/img2.png"
import './NewsBoard.css'
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"

const NewsBoard = () => {
  return (
    <><button type="button" className="btn btn-dark">Trending Now</button>
    <p><strong>Another Big Apartment Project Slated for Broad Ripple Company</strong></p>
    <img src={img2} className="img-fluid" alt="..." />

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">Don't Miss</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">All</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Style Hunter</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Vogue</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Health & Fitness</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Travel</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Gagdets</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
<img src={img3} className="img-fluid" alt="..." />

<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <li class="navbar-brand-1" >Lifestyle News</li>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">All</a>
        </li>
        <li class="nav-item-1">
          <a class="nav-link" href="#">Travel</a>
        </li>
        <li class="nav-item-2">
          <a class="nav-link" href="#">Recipe</a>
        </li>
        <li class="nav-item-3">
          <a class="nav-link" href="#">Health & Fitness</a>
        </li>
        <li class="nav-item-4">
          <a class="nav-link" href="#">Music</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<img src={img4} className="img-fluid" alt="..." />
<img src={img5} className="img-fluid" alt="..." />


</>

  )
}

export default NewsBoard
