'use client'
import React, { useEffect, useState } from 'react'
interface Iprop{
    defaultTab?:any; 
    TabList?:any;
    children?:any
}
const Tab = ({ defaultTab, TabList,children }:Iprop) => {
    const [activeTab, setActiveTab] = useState(defaultTab);

 
  
    return (
      <>
      <div>
        {children}
      </div>
      </>
    );
}

export default Tab
