import React from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

const SiteRoot = () => {
  return (
    <React.Fragment>
      <Header/>
      <Outlet/>
      <Footer/>
    </React.Fragment>
  )
}

export default SiteRoot