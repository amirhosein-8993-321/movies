import React from 'react';
import '../src/App.css'
import Header from './components/Header';
import Result from './components/result'; 
import { FaChevronDown } from "react-icons/fa";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Filmen from './components/FilmEN';
import FilmEnPage from './pages/filmenPage';

function App() {
  const TopButton = () => {
    window.scrollTo(0, 0)
  }
  return (
 <>        
   <BrowserRouter>
   <Header />
    <Routes>
      <Route element={<Filmen />} path='/film-en' />
      <Route element={<Result />} path='/' />
      <Route path='/film-en/:id' element={<FilmEnPage />} />
    </Routes>
   </BrowserRouter>
 <button onClick={TopButton} className="bottom-6 border-2 border-black fixed z-50 right-6 rotate-180 bg-[#339FFF] p-4 rounded-full"><FaChevronDown /></button>
 </>
  );
}
export default App;