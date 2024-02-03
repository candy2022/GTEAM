import React from 'react';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Googlebtn from './Components/Googlebtn';
import Mypage from './Pages/MyPage';
import Chart from './Pages/Chart';
import MoneyInput from './Pages/MoneyInput';
import MoneyBook from './Pages/MoneyBook';
import PhotoiInput from './Pages/PhotoInput';
import Board from './Pages/Board';
import WritePost from './Pages/WritePost';

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
      <Route path={"moneybook/moneyinput"} element={<MoneyInput />}></Route> 
      <Route path={"moneybook/photoinput"} element={<PhotoiInput />}></Route> 
      <Route path={"/moneybook"} element={<MoneyBook />}></Route> 
      <Route path={"/board"} element={<Board />}></Route> 
      <Route path={"board/writepost"} element={<WritePost />}></Route> 

     </Routes>          
   </BrowserRouter>
    </>
  )
}

export default App;
