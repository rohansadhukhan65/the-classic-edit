'use client'
import React from 'react'
import UserLayout from './UserLayout'
import Header from './Header/Header'
import Footer from './Footer/Footer'
 


interface Iprop {
    children : any
}
export default function HeaderFooterWrapperUser({children}:Iprop) {
  return (
    <UserLayout>
      <Header/>
        {children}
      <Footer/>
    </UserLayout>
  )
}
