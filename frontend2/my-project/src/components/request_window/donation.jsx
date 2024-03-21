import React, { useContext, useEffect, useState } from 'react'
import { Mycontext } from '../context/contextapi'
import { useNavigate } from 'react-router-dom'


export default function Donation() {
    // now create the state to manage the 
    const navigator= useNavigate()
    const {request,setrequest}=useContext(Mycontext)

    const handelclick=(index)=>{
      
        let temp=[...request]
        temp.map((element,ind)=>{
          if(ind===index){
            element.selected=true
          }
          else{
            element.selected=false
          }
        })
        navigator("/donationform")
        setrequest(temp)
        console.log(request)
    }
    
  return (
    <div>
      <div className="wrapper my-20 mx-3">
      {request.map((element,index)=>{
        return(
            <div key={index} class="mt-2 max-w-screen p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{element.title}</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{element.description}</p>
    <p class=" flex gap-2 mb-3 font-normal font-mono text-gray-700 dark:text-gray-400">Raised Amount:<p className=" text-red-700">{element.amount}</p></p>
    <p class=" flex gap-2 mb-3 font-normal font-mono text-gray-700 dark:text-gray-400">Collected Amount:<p className=" text-red-700">{element.collected}</p></p>
    <button onClick={()=>handelclick(index)} class=" w-48 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Donate Now
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </button>
</div>
        )
      })}

      </div>
    </div>
  )
}
