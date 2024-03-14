import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './components/login/login'
import { Home } from './components/home/home'
import './App.css'
import { Navbar } from './components/navbar/navbar'
import {BrowserRouter, Route,Routes} from "react-router-dom"
import axios from "axios"

function App() {
  const [username,setusername]=useState()
  const getdetails=async()=>{
    await axios.get("http://localhost:3000/api/v1/details",{withCredentials:true}).then((data)=>{
    setusername(data.data.username)
    console.log(data.data.username)}).
    catch((err)=>console.log(err))
  }
 useEffect(()=>{
  getdetails()
 },[])
 getdetails()

  // console.log(username)
  return (
    <>
    <BrowserRouter>
    <Navbar username={username}></Navbar>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/login' element={<Login username={username} setusername={setusername}></Login>}></Route>
    </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App
