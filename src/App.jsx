import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import { Route,Routes } from 'react-router-dom'
import Landing from './assets/Landing'
import Home from './assets/Home'
import Header from './assets/Header'
import Footer from './assets/Footer'
import Register from './assets/Register'
import Login from './assets/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/log' element={<Login/>}/>
        <Route path='/reg' element={<Register/>}/>
      </Routes>

      <Footer/>
      <ToastContainer/>
    </>
  )
}

export default App
