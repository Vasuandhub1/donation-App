import axios from 'axios'
import React, { useContext, useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { Mycontext } from '../context/contextapi'



export default function Requestdonstion() {

    const {request,setrequest}=useContext(Mycontext)

    const navigate=useNavigate()
    const[amount,setAmount]=useState()
    const[title,settitle]=useState()
    const[description,setDescription]=useState()
    const[Id,setId]=useState()


    
    const handelamount=(event)=>{
        setAmount(event.target.value)
    }
    let count=0;
    const update=()=>{
        request.map((element)=>{
            if(element.selected===true){
               settitle(element.title)
               setId(element._id)
               setDescription(element.description)
               count++;
            }
        })
        if(!count){
            navigate("/donation")
        }
    }
    const handelpay=async()=>{
        await axios.post("http://localhost:3000/api/v1/add_donation",{
            "collected":+amount,
            "raiseId":Id
        },{withCredentials:true}).then((res)=>{console.log(res)
             alert("Donated sucessful")
             navigate("/donation")
             location.reload()
            })
        .catch((err)=>console.log(err))
    }
    

    useEffect(()=>{
        update()
        
        
    },)
    
  return (
    <div>
       <div className='flex justify-center my-20'>
<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" action="#">
        <h5 class=" text-center text-3xl font-medium text-gray-900 dark:text-white">Donate</h5>
        <h5 class=" text-center text-3xl font-medium text-gray-900 dark:text-white">{description}</h5>
        <div>
            <label for="email" class="block mb-2 text-xl text-justify  font-medium text-gray-900 dark:text-white">Title</label>
            <input type="text" name="email" value={title} id="email" class="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="john" disabled />
        </div>
        <div>
            <label for="password" class=" text-xl block mb-2  font-medium text-gray-900 dark:text-white">Amount</label>
            <input type="Number" onChange={(event)=>handelamount(event)} value={amount} name="password" id="password" placeholder="Rs." class=" h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div class="flex items-start">
            
            
        </div>
        <button type="button" onClick={handelpay} class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pay Now</button>
        
    </form>
</div>
</div>
    </div>
  )
}
 