import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './components/Detail.js';
import Navigation from './components/Navigation.js';
import About from './routes/About.js';
import Home from './routes/Home.js';
import './styles/App.css';
// app.js는 중앙관제탑 역할



function App() {;
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App