'use client'
import React, { useEffect, useState } from 'react'
import { setTimeout } from 'timers'



interface Iprops {
    hr : Number;
    timerTitle : String
}
export default function CountDownTimer({hr,timerTitle}:Iprops) {

    const [hour , setHour] = useState<string>(`${hr}`)
    const [minute , setMinute] = useState<string>(`${60}`)
    const [second , setSecond] = useState<string>(`${60}`)


     
      
      
    // function hoursToSeconds (hours : any){
    //     return hours * 3600; // 1 hour = 3600 seconds
    //   };
    // function hoursToMilliseconds (hours : any)  {
    //     return hours * 3600 * 1000; // 1 hour = 3600 seconds = 3600 * 1000 milliseconds
    // };
    // function secondsToMilliseconds (seconds : any)  {
    //     return seconds * 1000; // 1 second = 1000 milliseconds
    //   };


    useEffect(()=>{
        setTimeout(() => {
          const hrClone = parseInt(hour)
          hrClone ? setHour(`${hrClone - 1}`) : setHour(`${hr}`)
        },3600000)
    },[hour,hr])


    useEffect(()=>{
        setTimeout(() => {
          const minClone = parseInt(minute)
          minClone ? setMinute(`${minClone - 1}`) : setMinute(`60`)
        },60000)
    },[minute,hr])


    useEffect(()=>{
        setTimeout(() => {
          const secClone = parseInt(second)
          secClone? setSecond(`${secClone - 1}`) : setSecond(`60`) 
        },1000)
    },[second,hr])
   
  return (
        <div className='flex items-center'>
            <span className='text-white font-[18px]'>{timerTitle}</span>
            <div className='bg-white h-[40px] w-[40px] mx-2 flex justify-center items-center rounded-[5px]'>{hour}</div>
            <div className='bg-white h-[40px] w-[40px] mx-2 flex justify-center items-center rounded-[5px]'>{minute}</div>
            <div className='bg-white h-[40px] w-[40px] mx-2 flex justify-center items-center rounded-[5px]'>{second}</div>
        </div>
  )
}
