import React from 'react'
import Hero from '../../components/hero/Hero'

import work__image from "../../assets/images/hero/task_hero_image.png"

import youtube__thumbnail from "../../assets/images/video/yt-video.png"
import Qoutes from '../../components/slider/Qoutes'

import deadline__image from "../../assets/images/clip/feature_task.png"
import deadline__icon from "../../assets/images/clip/task_icon.svg"

import { BsArrowRightCircle } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';


const Home = () => {
  return (
    <>
      <Hero />
      <section className="mt-5 md:mt-0 flex items-center justify-between">
        <div className="flex items-center">
          <img src={work__image} className="lg:w-3/4 md:w-full" alt="" />
          <div className=" flex flex-col text-left md:hidden lg:block">
            <div className="lg:w-3/5 md:w-full md:mb-0 lg:mb-5">
              <h3 className="font-semibold">WORK ANYWHERE</h3>
              <p>
                Keep important info handy—your notes sync automatically to all
                your devices.
              </p>
            </div>
            <div className="w-3/6 mb-5">
              <h3 className="font-semibold">REMEMBER EVERYTHING</h3>
              <p>
                Make notes more useful by adding text, images, audio, scans,
                PDFs, and documents.
              </p>
            </div>
            <div className="w-3/6 mb-5">
              <h3 className="font-semibold">TURN TO-DO INTO DONE</h3>
              <p>
                Bring your notes, tasks, and schedules together to get things
                done more easily.
              </p>
            </div>
            <div className="w-3/6 mb-5">
              <h3 className="font-semibold">FIND THINGS FAST</h3>
              <p>
                Get what you need, when you need it with powerful, flexible
                search capabilities.
              </p>
            </div>
          </div>
        </div>
        
      </section>

      {/* productivity */}
      <section >
        <div className="center">
          <h1 className="text-4xl font-medium">
            Find your productivity happy place
          </h1>
          <p className="text-xl p-5">See what’s possible with Evernote</p>
        </div>

        <a href="https://www.youtube.com/embed/NgkCgqIogcY/?rel=0">
          <img
            src={youtube__thumbnail}
            className="w-3/5 md:w-full mx-auto"
            srcset={youtube__thumbnail}
            alt="Play YouTube video What is Evernote"
          />
        </a>
      </section>
      <Qoutes />
      {/* deadline */}
      <section>
        <div className="flex items-center">
          <div className="text-left lg:w-1/2 lg:space-x-0 md:space-x-10 md:mt-10 md:mb-5">
            <img className='md:hidden lg:block' src={deadline__icon} alt="" />
            <h2 className="text-4xl font-semibold mb-5">Hit every deadline</h2>
            <p className="w-1/2 text-xl leading-9 mb-5">
              Create and assign tasks inside your notes with due dates, flags,
              and reminders so nothing falls through the cracks.
            </p>
            <a href="l" className="text-green-600 font-medium">
              LEARN MORE →
            </a>
          </div>
          <div className="w-1/2">
            <img  src={deadline__image} className="" alt="" />
          </div>
        </div>
        <div className="flex lg:justify-between">
        <div className="lg:w-1/2 ">
            <img  src={deadline__image}  alt="" />
          </div>
          <div className="text-left lg:w-1/2 lg:space-x-0  md:space-x-10 md:mt-10 md:mb-5 lg:right-0">
            <img className='md:hidden lg:block' src={deadline__icon} alt="" />
            <h2 className="text-4xl font-semibold mb-5">Hit every deadline</h2>
            <p className="w-1/2 text-xl leading-9 mb-5">
              Create and assign tasks inside your notes with due dates, flags,
              and reminders so nothing falls through the cracks.
            </p>
            <a href="l" className="text-green-600 font-medium">
              LEARN MORE →
            </a>
          </div>
          
        </div>
        <div className="flex items-center">
          <div className="text-left lg:w-1/2 md:space-x-10 md:mt-10 md:mb-5">
            <img className='md:hidden' src={deadline__icon} alt="" />
            <h2 className="text-4xl font-semibold mb-5">Hit every deadline</h2>
            <p className="w-1/2 text-xl leading-9 mb-5">
              Create and assign tasks inside your notes with due dates, flags,
              and reminders so nothing falls through the cracks.
            </p>
            <a href="l" className="text-green-600 font-medium">
              LEARN MORE →
            </a>
          </div>
          <div className="w-1/2">
            <img  src={deadline__image}  alt="" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-left w-1/2 md:space-x-10 md:mt-10 md:mb-5">
            <img className='md:hidden lg:block' src={deadline__icon} alt="" />
            <h2 className="text-4xl font-semibold mb-5">Hit every deadline</h2>
            <p className="w-1/2 text-xl leading-9 mb-5">
              Create and assign tasks inside your notes with due dates, flags,
              and reminders so nothing falls through the cracks.
            </p>
            <a href="l" className="text-green-600 font-medium">
              LEARN MORE →
            </a>
          </div>
          <div className="w-1/2">
            <img  src={deadline__image} alt="" />
          </div>
        </div>
      </section>

      {/* find your evernote */}
      <section>
        <div>
          <div className='section__header pb-10 lg:w-3/5 mx-auto md:w-11/12'>
            <h2 className='lg:text-4xl lg:mb-5 lg:font-semibold md:text-2xl'>Find your Evernote</h2>
            <p className='text-2xl mb-5 md:text-lg'>
              Whether you want to get organized, keep your personal life on
              track, or boost workplace productivity, Evernote has the right
              plan for you.
            </p>
            <a href="c" className='text-green-600 lg:block md:hidden'>COMPARE PLANS →</a>
          </div>
          <div className='price__section flex space-x-4  lg:flex-row text-left lg:ml-24 md:ml-0 md:flex-col'>
            {/* <div className='w-1/3'></div> */}
            <div className='price__item shadow bg-gray-100 p-10 leading-9 lg:w-96 md:w-full md:mb-8'>
              <h4 className='text-2xl'>FREE</h4>
              <h3 className='font-semibold text-4xl py-5'>$0</h3>
              <p className='font-medium text'>Capture ideas and find them quickly</p>
              <ul className='font-light'>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>Take great notes</span></li>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>Sync up to 2 devices </span></li>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>60 MB monthly uploads</span></li>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>25 MB max. note size</span></li>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>Get organized with Home dashboard and 3 widgets</span></li>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>Stay on top of it all with in-note tasks</span></li>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>Find things fast with search and tags</span></li>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>Clip web pages</span></li>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>Attach PDFs, receipts, files, photos, images, and documents</span></li>
                <a href='g' className='text-center border bg-green-600 px-5 block py-2 text-white font-medium mt-5'>Get started</a>
              </ul>
            </div>
            <div className='price__item shadow bg-gray-100 p-10 leading-9 lg:w-96 md:w-full md:mb-8'>
              <h4 className='text-2xl'>FREE</h4>
              <h3 className='font-medium py-5'><span className='font-semibold text-4xl'>$14.99</span> / MONTH</h3>
              <p className='font-medium text'>Keep home and family on track</p>
              <p className='font-medium'>EVERYTHING IN FREE, PLUS:</p>
              <ul className='font-light'>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>Take great notes</span></li>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>Sync up to 2 devices </span></li>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>60 MB monthly uploads</span></li>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>25 MB max. note size</span></li>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>Get organized with Home dashboard and 3 widgets</span></li>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>Stay on top of it all with in-note tasks</span></li>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>Find things fast with search and tags</span></li>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>Clip web pages</span></li>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>Attach PDFs, receipts, files, photos, images, and documents</span></li>
                <a href='g' className='text-center border bg-green-600 px-5 block py-2 text-white font-medium mt-5'>Choose Personal</a>
              </ul>
            </div>
            <div className='price__item shadow bg-gray-100 p-10 leading-9 lg:w-96 md:w-full md:mb-8'>
              <h4 className='text-2xl'>PROFESSIONAL</h4>
              <h3 className='font-medium py-5'><span className='font-semibold text-4xl'>$17.99</span> / MONTH</h3>
              <p className='font-medium text'>Tackle any project, at work or at home</p>
              <p className='font-medium'>EVERYTHING IN PERSONAL, PLUS:</p>
              <ul className='font-light'>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>Take great notes</span></li>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>Sync up to 2 devices </span></li>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>60 MB monthly uploads</span></li>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>25 MB max. note size</span></li>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>Get organized with Home dashboard and 3 widgets</span></li>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>Stay on top of it all with in-note tasks</span></li>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>Find things fast with search and tags</span></li>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>Clip web pages</span></li>
                <li className="flex items-center space-x-2"><AiOutlineCheck className="text-green-600" /><span>Attach PDFs, receipts, files, photos, images, and documents</span></li>
                <a href='g' className='text-center border bg-green-600 px-5 block py-2 text-white font-medium mt-5'>Choose Professional</a>
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      {/* everynotes team */}
      <section className='lg:w-1/2 mx-auto lg:pb-20 mt-20 md:w-11/12 md:mt-2 md:pb-16'>
      <div className='every__notes__teams flex justify-between items-center mx-auto border-solid border-2 rounded-lg border-gray-300 shadow p-10 mt-7'>
            <div className='text-left'>
              <h2 className='text-2xl'>EVERNOTE TEAMS</h2>
              <p className='font-medium'><span className='font-semibold text-2xl'>$19.99</span>/ USER / MONTH</p>
              <p>Collaborate and share knowledge to keep your team on the same page.</p>
            </div>
            <div><BsArrowRightCircle className='text-5xl text-green-600' /></div>
          </div>
      </section>
    </>
  );
}

export default Home