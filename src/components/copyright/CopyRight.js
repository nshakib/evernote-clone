import React from 'react'
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa"
import {BiLogoLinkedin, BiLogoMediumOld} from "react-icons/bi"
const CopyRight = () => {
  return (
    <section className=''>
        <div className='copyright flex justify-between border-b-2  border-gray-300 pb-10 md:m-10'>
            <div>Choose a language: English (US) </div>
            <div>
                <ul className='flex space-x-8 text-x md:space-x-8 md:text-lg'>
                    <li><FaFacebookF /></li>
                    <li><FaTwitter /></li>
                    <li><BiLogoMediumOld /></li>
                    <li><FaInstagram /></li>
                    <li><BiLogoLinkedin /></li>
                </ul>
            </div>
        </div>
        <div className='flex justify-between mt-10 mb-10 md:m-10 md:pb-5'>
            <p>© 2023 Evernote Corporation. All rights reserved.</p>
            <ul className='flex space-x-4'>
                <li><a>Security</a></li>
                <li><a>Legal</a></li>
                <li><a>Privacy</a></li>
            </ul>
        </div>
    </section>
  )
}

export default CopyRight