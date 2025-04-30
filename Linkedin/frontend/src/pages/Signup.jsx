import React from 'react'
import logo from "../assets/logo.svg"

function Signup() {
  
  return (
    <div className='w-full h-screen bg-[white] flex flex-col items-center justify-start gap-[10px]'
    >
        <div className='p-[30px] lg:p-[35px] w-full h-[80px] flex items-center'>
        <img src ={logo} alt=""  width="84" height="21" ></img>
      </div>
      <form className='w-[90%] max-w-[400px] h-[600px] md:shadow-xl flex flex-col justify-center items-center gap-[10px]'>
        <h1 className='text-gray-800 text-[30px] font-semibold mb-[30px]'>Sign up</h1>
        <input type="text" placeholder='firstname' required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md'/>
        <input type="text" placeholder='lastname' required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md'/>
        <input type="text" placeholder='username'required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md'/>
        <input type="text" placeholder='email'required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md'/>
        <div className='w-[100%] h-[50px]  border-gray-600 text-gray-800 text-[18px] rounded-md relative  '>   
           <input type="password" placeholder='password'required className='w-[100%] h-[50px] border-2 border-gray-600 text-gray-800 text-[18px] px-[20px] py-[10px] rounded-md'/>
           <span className='absolute top-[10px] right-[10px]'>Show</span>
        </div>
        <button className='w-[100%] h-[50px] rounded-full bg-[#1d68fd] mt-[30px] text-white '>Sign up</button>
         
      </form>
    </div>
  )
}

export default Signup
