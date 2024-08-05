import React from 'react'
import Register from './components/Register'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import ProductList from './customHooks/ProductList'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/ProductList' element={<ProductList/>} />

      </Routes>
    </div>
  )
}

export default App