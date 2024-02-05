import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ShowComponent from './components/ShowComponent';

export default function Index(){

   return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/show" element={<ShowComponent />}></Route>
      </Routes>

    </BrowserRouter>

   )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);

