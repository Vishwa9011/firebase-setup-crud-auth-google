import AddProduct from './Pages/AddProduct';
import { Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Login from './Pages/Login'
import Home from './Pages/Home'
import React from 'react'
import './App.css'
function App() {

     return (
          <div className="App">
               {/* * Navbar */}
               <Navbar />

               {/* //* Routes */}
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
