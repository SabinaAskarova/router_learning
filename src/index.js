import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import List from './pages/List';
import About from './pages/About';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
  <Routes>
    <Route path="/" element={<Main/>}> </Route>
    <Route path="/list" element={<List/>}> </Route>
    <Route path="/about" element={<About/>}> </Route>
    <Route path='*' element={<NotFound/>}></Route>
  </Routes>
  
  </BrowserRouter>
);

reportWebVitals();
