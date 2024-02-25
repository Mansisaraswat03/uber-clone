"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import GooglePlacesAutoComplete from 'react-google-places-autocomplete'
const InputItem = ({type}) => {
    const [value,setValue] =useState(null);
  return (
    <div className='flex items-center gap-4 bg-slate-200 p-3 rounded-lg mt-3'>
      <Image src='/src.png' width={20} height={10}/>
      <input type='text' placeholder = {type=="source" ?"Pickup Location" :"Dropoff Location" } className='bg-transparent w-full outline-none'/>
      {/* <GooglePlacesAutoComplete 
      apiKey ={process.env.Next_PUBLIC_GOOGLE_API_KEY}
      selectProps={{
        value,
        onChange: setValue,
      }} /> */}
    </div>
  )
}

export default InputItem
