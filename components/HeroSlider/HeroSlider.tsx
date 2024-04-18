'use client'

import { useState } from "react";
import Slider from "./Slider";
import RightArrowIcon from "../Icons/RightArrowIcon";
import LeftArrowIcon from "../Icons/LeftArrowIcon";
import Dots from "./Dots";




export default function HeroSlider() {


    const SlidersArray = [
        {
            Text : "Text One" ,
            Image : {link:'/heroOne.png',Width:500,Height:500}
        },
        {
            Text : "Text Two"  ,
            Image : {link:'/heroTwo.png',Width:500,Height:500}
        },
        {
            Text : "Text Three"  ,
            Image : {link:'/heroThree.png',Width:500,Height:500}
        },
    ]
    const [ActiveIndex, setActiveIndex] = useState(1); // Assuming the initial index is 0

    const  LeftHandler = () => {
        if (ActiveIndex > 1) { // Checking if ActiveIndex is greater than 0 to avoid going out of bounds
            setActiveIndex(ActiveIndex - 1); // Decrementing ActiveIndex to move to the previous slider
          }
    };
    
    const RightHandler = () => {
     
      if (ActiveIndex < SlidersArray.length) { // Checking if ActiveIndex is within the array bounds
        setActiveIndex(ActiveIndex + 1); // Incrementing ActiveIndex to move to the next slider
      }
    };
    
    
      return (
        <div className="relative">

            {/* Sliders */}
            <div className="flex w-[100%]">
            {SlidersArray.map((slide,key) => {
                return <Slider   Img={slide.Image} SlideKey={key + 1} key={key} ActiveIndex={ActiveIndex}>
                    <div className="absolute top-[20%] left-[15%]">
                        <h1 className="text-white font-semibold text-6xl my-5">Suit up for</h1>
                        <h1 className="text-white font-semibold text-6xl my-5">Success</h1>
                        <button className="bg-white rounded-sm px-9 py-2 font-semibold  my-5" >SHOP NOW</button>
                    </div>
                </Slider>
            })}
            </div>

            {/* Arrows */}
            <div className="absolute flex justify-between w-[100%] top-[50%] right-[50%] transform translate-x-[50%]">
                <button onClick={LeftHandler} className="mx-10" ><LeftArrowIcon/></button>
                <button onClick={RightHandler} className="mx-10"> <RightArrowIcon/></button>
            </div>

            {/* Dots */}
            <div className="absolute flex justify-center items-center w-[100%] bottom-6 gap-x-2">
                {SlidersArray.map((slide,key)=> <Dots key={key} isActive={ActiveIndex=== (key +1)?true:false}/>)}
            </div>
        </div>
   
       
      );
}
