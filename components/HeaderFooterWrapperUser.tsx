import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'
import UserLayout from './UserLayout'


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
