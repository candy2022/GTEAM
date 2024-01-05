import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';


export default function AppRouter() {
   
  return (
    <div className="Router">
    
      <Routes>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/dashboard"} element={<Dashboard />}></Route> 
           
          
       </Routes>
        
      </div>
  );
}