import { useEffect, useState } from 'react'
import Login from './components/login/login'
import { Home } from './components/home/home'
import { Navbar } from './components/navbar/navbar'
import Donation from './components/request_window/donation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Requestdonstion from './components/request_donation/requestdonstion'
import { Mycontext  } from './components/context/contextapi'
import Userprofile from './components/userprofile/userprofile'
import axios from 'axios'
import Form from './components/donation_form/form'



function App() {
  
  const [request,setrequest]=useState([])

  const donation_request=async()=>{
      await axios.get("http://localhost:3000/api/v1/showrequest",{withCredentials:true})
      .then((data)=>{
        let requests=[...data.data.request_data]
        requests.map((element,index)=>{
          element.selected=false
        })
      setrequest(requests)})
      .catch((err)=>{console.log(err)})
  }
  //  now go for th useeffect 
  useEffect(()=>{
      donation_request()
  },[])
  return (
    <>
    <Mycontext.Provider value={{request,setrequest}}>
    <BrowserRouter>
    <Navbar></Navbar>
      {localStorage.getItem("username")?<Routes><Route path="/" element={<Home></Home>}/>
      <Route path="/requestform" element={<Requestdonstion></Requestdonstion>}/>
      <Route path="/donation" element={<Donation></Donation>}/>
      <Route path="/donationform" element={<Form></Form>}/>
      <Route path="/userprofile" element={<Userprofile></Userprofile>}/>
      </Routes>:
      <Routes> 
      <Route path="/login" element={<Login></Login>}/> 
      <Route path="/" element={<Home></Home>}/>
      </Routes>}
     </BrowserRouter>
     </Mycontext.Provider>
    </>
  )
}

export default App
