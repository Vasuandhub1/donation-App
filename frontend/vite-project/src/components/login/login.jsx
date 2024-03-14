import React, { useState } from 'react'
import axios from "axios"
import "./login.css"
import { useNavigate } from 'react-router-dom'

export default function Login(props) {
    const navigate=useNavigate()
    const [user,setuser]=useState()
    const [semail,setsemail]=useState()
    const [lemail,setlemail]=useState()
    const [spassword,setspassword]=useState()
    const [lpassword,setlpassword]=useState()
    
    // handle all the events
    const handleuser=(e)=>{
        setuser(e.target.value)
    }
    const handlesemail=(e)=>{
        setsemail(e.target.value)
    }
    const handlespassword=(e)=>{
        setspassword(e.target.value)
    }
    const handlelemail=(e)=>{
        setlemail(e.target.value)
    }
    const handlelpassword=(e)=>{
        setlpassword(e.target.value)
    }
    // handel the sign up 
    const handlesignup=async()=>{
        await axios.post("http://localhost:3000/api/v1/signup",{
           "username":user,
            "email":semail,
            "password":spassword 
        }).then((data)=>{
            alert(`account created Sucessfull`);
        }).
        catch(()=>console.log("err"))
    }
    const handlelogin=async()=>{
        await axios.post("http://localhost:3000/api/v1/login",{
            "email":lemail,
            "password":lpassword
        },{withCredentials:true}).then((data)=>{
            props.setusername(data.data.username)
            localStorage.setItem("username",data.data.username)
           alert(`sucessfully logged in as ${data.data.username}`)
            navigate("/")
        }).
        catch((err)=>console.log(err))
    }

   
  return (
    <div className='compo'>
      	<div class="main-2">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				<form >
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="username" value={user} onChange={(e)=>handleuser(e)} placeholder="User name" required=""/>
					<input type="email" name="email" value={semail} onChange={(e)=>handlesemail(e)}  placeholder="Email" required=""/>
					<input type="password" name="pswd" value={spassword} onChange={(e)=>handlespassword(e)}  placeholder="Password" required=""/>
					<button onClick={handlesignup}>Sign up</button>
				</form>
			</div>

			<div class="login">
				
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" value={lemail} onChange={(e)=>handlelemail(e)}  placeholder="Email" required=""/>
					<input type="password" name="pswd" value={lpassword} onChange={(e)=>handlelpassword(e)}  placeholder="Password" required=""/>
					<button onClick={handlelogin}>Login</button>
				
			</div>
	</div>
    </div>
  )
}
