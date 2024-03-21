import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Requestdonstion() {
    const navigate=useNavigate()
    const[title,setTitle]=useState()
    const[description,setDescription]=useState()
    const[required,setRequired]=useState()
    const[collected,setCollected]=useState()
    

    const handeltitle=(event)=>{
        setTitle(event.target.value)
    }
    const handeldescription=(event)=>{
        setDescription(event.target.value)
    }
    const handelrequired=(event)=>{
        setRequired(event.target.value)
    }
    const handelcollected=(event)=>{
        setCollected(event.target.value)
    }
   

    const handelreq=async()=>{
       
        await axios.post("http://localhost:3000/api/v1/create_donation",{
            "title":title,
            "description":description,
            "amount":+required,
           "collected":+collected
        },{withCredentials:true})
        .then((res)=>{console.log(res)
        alert("created sucessfull")})
        .catch((err)=>{
            alert("fill all the fields")
        })
            }
            console.log(title)
            console.log(description)
            console.log(required)
            console.log(collected)

  return (
    <div>
        <div className="mx-16 my-20 w-[70rem] flex justify-center border-2 p-11 rounded-lg">
<form>
    <h1 className='text-center text-2xl'>Request From</h1>
    <div className="grid gap-6 mb-7 md:grid-cols-2">
        <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title for Donation (heading)</label>
            <input type="text" onChange={(event)=>handeltitle(event)} value={title} id="first_name" className=" h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required />
        </div>
       
        <div>
            <label for="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Required Amount</label>
            <input type="number" id="website" onChange={(event)=>handelrequired(event)} value={required} className="  h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Amount in Number" required />
        </div>
        <div>
            <label for="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Collected Amount</label>
            <input type="number" id="visitors" onChange={(event)=>handelcollected(event)} value={collected} className=" h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Amount in Number" required />
        </div>
    </div>
    <div className="mb-6">
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
        <textarea id="email" onChange={(event)=>handeldescription(event)} value={description} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description about Donation" required />
    </div> 
     
    
    <button type="button" onClick={handelreq} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Request</button>
</form>
</div>
    </div>
  )
}
