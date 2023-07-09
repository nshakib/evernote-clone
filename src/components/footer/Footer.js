import React from 'react'
import footer_logo from "../../assets/images/footer/footer-logo.svg"
import { useLocation } from 'react-router';
import CopyRight from '../copyright/CopyRight';

const Footer = () => {
  const location = useLocation();
  // Check the location and conditionally disable the footer
  if (location.pathname === '/log-in') {
    return null; // Return null to disable the footer on the login page
  }
  
  if (location.pathname === '/sign-up') {
    return null; // Return null to disable the footer on the login page
  }

  if (location.pathname === '/profile') {
    return null; // Return null to disable the footer on the login page
  }

  return (
    <>
    <section className='pb-20'>
      <div className='border-b-2  border-black mb-5'>
        <img src={footer_logo} alt='' className='ml-5' />
        <div className='mb-10'></div>
      </div>

      <div className='footer__nav flex space-x-0 mt-10 text-left md:m-6 md:space-x-5'>
      <div className='w-1/6'>
          <h3 className='font-semibold mb-5'>PRODUCT</h3>
          <ul className='font-light leading-10'>
            <li><a href='' className='hover:text-green-600'>Why Evernote</a></li>
            <li><a href='' className='hover:text-green-600'>Evernote Free</a></li>
            <li><a href='' className='hover:text-green-600'>Evernote Personal</a></li>
            <li><a href='' className='hover:text-green-600'>Evernote Professional</a></li>
            <li><a href='' className='hover:text-green-600'>Evernote Teams</a></li>
            <li><a href='' className='hover:text-green-600'>Compare Plans</a></li>
            <li><a href='' className='hover:text-green-600'>Student Discount</a></li>
            <li><a href='' className='hover:text-green-600'>Download App</a></li>
          </ul>
        </div>
        <div className='w-1/6'>
          <h3 className='font-semibold mb-5'>FEATURES</h3>
          <ul className='font-light leading-10'>
            <li><a href='' className='hover:text-green-600'>Web Clipper</a></li>
            <li><a href='' className='hover:text-green-600'>Templates</a></li>
            <li><a href='' className='hover:text-green-600'>Spaces</a></li>
            <li><a href='' className='hover:text-green-600'>Integrations</a></li>
            <li><a href='' className='hover:text-green-600'>Notes Sync</a></li>
            <li><a href='' className='hover:text-green-600'>PDF & Doc Search</a></li>
            <li><a href='' className='hover:text-green-600'>Search Handwriting</a></li>
            <li><a href='' className='hover:text-green-600'>Document Scanner</a></li>
            <li><a href='' className='hover:text-green-600'>Notebooks & Tags</a></li>
            <li><a href='' className='hover:text-green-600'>Tasks</a></li>
            <li><a href='' className='hover:text-green-600'>Calendar</a></li>
            <li><a href='' className='hover:text-green-600'>Home</a></li>
            <li><a href='' className='hover:text-green-600'>Search</a></li>
          </ul>
        </div>
        <div className='w-1/6'>
          <h3 className='font-semibold mb-5'>RESOURCES</h3>
          <ul className='font-light leading-10'>
            <li><a href='' className='hover:text-green-600'>Resources</a></li>
            <li><a href='' className='hover:text-green-600'>Make Connections</a></li>
            <li><a href='' className='hover:text-green-600'>Become an Expert</a></li>
            <li><a href='' className='hover:text-green-600'>Find an Expert</a></li>
            <li><a href='' className='hover:text-green-600'>Early Access</a></li>
            <li><a href='' className='hover:text-green-600'>Affiliates</a></li>
            <li><a href='' className='hover:text-green-600'>Developers</a></li>
            <li><a href='' className='hover:text-green-600'>Blog</a></li>
          </ul>
        </div>
        <div className='w-1/6'>
          <h3 className='font-semibold mb-5'>SUPPORT</h3>
          <ul className='font-light leading-10'>
            <li><a href='' className='hover:text-green-600'>Help & Learning</a></li>
            <li><a href='' className='hover:text-green-600'>Troubleshooting</a></li>
            <li><a href='' className='hover:text-green-600'>Forum</a></li>
          </ul>
        </div>
        <div className='w-1/12'>
          <h3 className='font-semibold mb-5'>COMPANY</h3>
          <ul className='font-light leading-10'>
            <li><a href='' className='hover:text-green-600'>About Us</a></li>
            <li><a href='' className='hover:text-green-600'>Careers</a></li>
            <li><a href='' className='hover:text-green-600'>Contact Us</a></li>
          </ul>
        </div>
      </div>
    </section>
    <CopyRight />
    </>
  )
}

export default Footer