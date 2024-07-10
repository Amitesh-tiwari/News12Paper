import React from 'react'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Performance from "./Components/performance/Performance"
import NewsBoard from './Components/NewsBoard'
import Advertise from './Components/Advertise'
import LatestArticle from "./Components/latestArticle/LatestArticle"

const App = () => {
  return (
    <div>
      <Header/>
      <Navbar />
      <NewsBoard />
      <Performance />
      <Advertise />
      <LatestArticle />

    </div>
  )
}

export default App
