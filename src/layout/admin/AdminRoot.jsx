import React from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import { Toaster } from 'react-hot-toast'

const AdminRoot = () => {
  return (
    <React.Fragment>
      <Header/>
      <Outlet/>
      <Footer/>
      <Toaster/>
    </React.Fragment>
  )
}

export default AdminRoot