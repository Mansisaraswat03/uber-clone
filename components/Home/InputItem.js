"use client"
import React,{useEffect, useState} from 'react'
import Image from 'next/image'
// import GooglePlacesAutoComplete from 'react-google-places-autocomplete'
const InputItem = ({type}) => {
    // const [value,setValue] =useState(null);
    // const [placeholder ,setPlaceholder] = useState(null);

    // useEffect(()=>{
    //   type=='source' ? setPlaceholder('Pickup Location'): setPlaceholder("Dropoff Location")
    // },[])

    const getLatAndLong=(place)=>{
      const placeId = place.value.place_id;
      const service = new GooglePlacesAutocomplete.maps.places.PlacesService(document.createElement('div'));
    }

  return (
    <div className='flex items-center gap-4 bg-slate-200 p-3 rounded-lg mt-3'>
      <Image src='/src.png' width={20} height={10}/>
      <input type='text' placeholder = {type=="source" ?"Pickup Location" :"Dropoff Location" } className='bg-transparent w-full outline-none'/>
      {/* <GooglePlacesAutoComplete 
      apiKey ={process.env.Next_PUBLIC_GOOGLE_API_KEY}
      selectProps={{
        value,
        onChange: (place)=>{getLatAndLong(place,type); setValue(place)},
         placeholder = {type=="source" ?"Pickup Location" :"Dropoff Location" },
         isClearable = true,
         className=' w-full outline-none',
         components:{
          DropdownIndicator:false
         },
         styles{
          control:(provided)=>({
            ...provided,
            backgroundColor:"00ffff00",
            border:"none",
          })
         }
      }} /> */}
    </div>
  )
}

export default InputItem
