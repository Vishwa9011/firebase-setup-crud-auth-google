import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import AddProduct from './Pages/AddProduct';
function App() {

     return (
          <div className="App">
               <Navbar />
               <Routes>
                    <Route path='/' element={<Home />} />
               </Routes>
               <Routes>
                    <Route path='/newproduct' element={<AddProduct />} />
               </Routes>
               <Routes>
                    <Route path='/login' element={<Login />} />
               </Routes>
          </div>
     )
}

export default App
