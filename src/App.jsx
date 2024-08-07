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