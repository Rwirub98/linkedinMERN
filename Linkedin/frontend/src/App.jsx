import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx'



function App(){
  return (
    <Routes>
<Route path='/' element={<Home />} />
<Route path='/Login' element={<Login />} />
<Route path='/Signup' element={<Signup />} />
</Routes>
  )
}
export default App