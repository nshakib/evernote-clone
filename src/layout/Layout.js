import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const Layout = ({children}) => {
  return (
    <div>
         <>
        <Navbar />
        <main className='container mx-auto lg:pt-20 md:pt-0' style={{ minHeight: '70vh' }}>
        {children}
        <Footer />
        </main>
    </>
    </div>
  )
}

export default Layout