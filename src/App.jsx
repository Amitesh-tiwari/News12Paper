<<<<<<< HEAD
import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import NewsBoard from './Components/NewsBoard';
import NewsBoard1 from './Components/NewsBoard1';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<NewsBoard />} />
        <Route path="/newsboard1" element={<NewsBoard1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
=======
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
>>>>>>> 37eb13af301ec8ddeee796591e0a6bb36969b91b
