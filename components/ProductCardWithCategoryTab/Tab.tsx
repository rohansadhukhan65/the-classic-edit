'use client'
import React, { useEffect, useState } from 'react'
interface Iprop{
    defaultTab?:any; 
    TabList?:any;
    children?:any
    currentTab : (tabName :any)=> any
}
const Tab = ({ defaultTab, TabList,children ,currentTab}:Iprop) => {
    const [selectedCategory, setselectedCategory] = useState(defaultTab);

    const tabChanger = (tabname:any) => {
      setselectedCategory(tabname)
      currentTab(tabname)
    }
    
 
  
    return (
      <>

      {/* tab Header */}
      <div className='flex justify-center gap-x-14 my-5'>
        {TabList.map((item:any,key:any)=>(<>
            <div onClick={()=>{tabChanger(item)}} className={`cursor-pointer border-b-[2px] hover:border-b-[2px] p-1 hover:border-[#D4A373] ${selectedCategory === item && 'border-[#D4A373]'}`} key={key}>{item}</div>
        </>))}
      </div>

      {/* Tab content */}
      <div className='container flex flex-col justify-center items-center'>
        {children}
      </div>
      </>
    );
}

export default Tab
