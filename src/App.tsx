import React from 'react';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';

function App() { 

  return (
    <>
   <BrowserRouter>       
    <Routes>
      <Route path={"/"} element={<Login />}></Route> {/* 첫 시작 화면 login*/}
      <Route path={"/dashboard"} element={<Dashboard />}></Route> 
                 
     </Routes>          
   </BrowserRouter>
    </>
  )
}

export default App;
