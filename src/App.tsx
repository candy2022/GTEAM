import React from 'react';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Googlebtn from './Components/Googlebtn';
import Mypage from './Pages/MyPage';
import Chart from './Pages/Chart';
import MoneyInput from './Pages/MoneyInput';
function App() { 

  return (
    <>
   <BrowserRouter>       
    <Routes>
      <Route path={"/"} element={<Login />}></Route> {/* 첫 시작 화면 login*/}
      <Route path={"/dashboard"} element={<Dashboard />}></Route> 
      <Route path={"/googlebtn"} element={<Googlebtn />}></Route> 
      <Route path={"/mypage"} element={<Mypage />}></Route> 
      <Route path={"/chart"} element={<Chart />}></Route> 
      <Route path={"/moneyinput"} element={<MoneyInput />}></Route> 

     </Routes>          
   </BrowserRouter>
    </>
  )
}

export default App;
