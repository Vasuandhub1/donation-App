import React, { useEffect , useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Userprofile() {
    const navigate=useNavigate()
    const [username,setusername]=useState()
    const [total,settotal]=useState()
   

    const details=async()=>{
        await axios.get("http://localhost:3000/api/v1/details",{withCredentials:true}).then((data)=>{setusername(data.data.detail.username)
         settotal(data.data.detail.total)})
        .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        details()
    },[])
    // console.log(profile)

    const handleedit=()=>{
        navigate("/userprofile")
    }
    const handlelogout=()=>{
        localStorage.removeItem("username")
        navigate("/")
        location.reload()
    }
    const handlerequest=()=>{
        navigate("/requestform")
    }
  return (
    <div>
        <div className=" flex justify-center w-[80rem] mx-10 my-20">
<form className='border-4 rounded-2xl p-6 ' >
    <h1 className="text-center text-4xl font-sans ">User Profile</h1>
    <div class="grid gap-6 mb-6 md:grid-cols-2 ">
        <div>
            <label for="first_name" class="block mb-2  text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" class=" h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" id="last_name" class="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
            <input type="text" id="last_name" value={username} class="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User Name" required />
        </div>
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
            <input type="text" id="company" class="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
        </div>  
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total Donated Amount</label>
            <input type="text" id="company" value={`Rs. ${total}`}  class="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rs." disabled />
        </div>  
        
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
            <input type="text" id="company" class="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0000000000" required />
        </div>  
        
    </div>
    <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" id="email" class=" h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
    </div> 
    
    <div className="flex justify-evenly">
    <button type="button" onClick={handlelogout} class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
    <button type="button" onClick={handleedit} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit User</button>
    <button type="button" onClick={handlerequest} class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Request For Donation</button>
    </div>
</form>
</div>
    </div>
  )
}
