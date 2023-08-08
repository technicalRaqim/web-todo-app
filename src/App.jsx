
// import {useState, useEffect} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import EmpListing from "./components/EmpListing"
import EmpEdit from "./components/EmpEdit";
import EmpDetail from "./components/EmpDetail";
import EmpCreate from "./components/EmpCreate";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {

  return (
    <div className='App'>
    <h1>React JS CRUD operations</h1>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmpListing/>}/>
        <Route path='/edit/:id' element={<EmpEdit/>}/>
        <Route path='/create' element={<EmpCreate/>}/>
        <Route path='/detail/:id' element={<EmpDetail/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </div>


  );
 
}

export default App
