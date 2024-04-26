'use client'
import React from 'react'

const UserLayout = React.lazy(()=> import('./UserLayout'))
const Header = React.lazy(()=> import('./Header/Header'))
const Footer = React.lazy(()=> import('./Footer/Footer'))


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
