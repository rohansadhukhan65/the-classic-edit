'use client'
import React , {useState, useEffect} from 'react'

export default function useScrollProgress() {
    const [completation , setCompletation] = useState(0)

    useEffect(() => {
      const UpdateScrollCompletion = () =>{
        const currentProgress = window.scrollY;
        const scrollHeight = document.body.scrollHeight - window.innerHeight;

        if(scrollHeight){
            setCompletation(Number(currentProgress / scrollHeight).toFixed(2) * 100);
        }
      }
    
    //   event 
    window.addEventListener('scroll',UpdateScrollCompletion);

    // clear event
    return () => window.removeEventListener('scroll', UpdateScrollCompletion)
      
    }, [])
    
  return completation
}
