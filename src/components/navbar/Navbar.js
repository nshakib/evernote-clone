import React, { useState } from "react";
import logo from "../../assets/images/logo/evernote/primary.svg";
import './index.css'
import notes_book from "../../assets/images/notes/notebooks-tags_optimized.svg"
import { BsArrowRight } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

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
    <div>
      <nav className="fixed top-0 left-0 w-full bg-white py-4 px-6 text-black z-10">
        <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
            <div className="text-xl font-bold">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <ul className="flex space-x-4">
              <li className="">
                <a
                  href="q"
                  className="font-medium hover:text-green-600 hover:border-b-4 border-green-600 hover:py-6"
                >
                  WHY EVERNOTE
                </a>
              </li>
              <li className="hoverable">
                <a
                  href="F"
                  className="font-medium hover:text-green-600 hover:border-b-4 border-green-600 hover:py-6"
                >
                  FEATURES
                </a>
                <div class="mt-6  mega-menu mb-16 sm:mb-0 border-t-2 shadow-gray-300 shadow-xl bg-white">
                  <div class="container mx-auto w-full flex">
                    <ul class="px-4 w-full sm:w-1/2 lg:w-1/4pb-6 pt-6 lg:pt-3">
                      <div class="flex items-center">
                        <img src={notes_book} className="mr-3" alt="" />
                        {/* <svg class="h-8 mb-3 mr-3 fill-current text-white"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"/>
                        </svg> */}
                        <h3 class=" text-black font-medium mb-2">
                          SYNC AND ORGANIZE <br />
                          <small>Keep your notes handy</small>
                        </h3>
                      </div>
                    </ul>
                    <ul class="px-4 w-full sm:w-1/2 lg:w-1/4pb-6 pt-6 lg:pt-3">
                      <div class="flex items-center">
                        <img src={notes_book} className="mr-3" alt="" />
                        <h3 class=" text-black font-medium mb-2">
                          SYNC AND ORGANIZE <br />
                          <small>Keep your notes handy</small>
                        </h3>
                      </div>
                    </ul>
                    <ul class="px-4 w-full sm:w-1/2 lg:w-1/4pb-6 pt-6 lg:pt-3">
                      <div class="flex items-center">
                        <img src={notes_book} className="mr-3" alt="" />
                        <h3 class=" text-black font-medium mb-2">
                          SYNC AND ORGANIZE <br />
                          <small>Keep your notes handy</small>
                        </h3>
                      </div>
                    </ul>
                    <ul class="px-4 w-full sm:w-1/2 lg:w-1/4pb-6 pt-6 lg:pt-3">
                      <div class="flex items-center">
                        <img src={notes_book} className="mr-3" alt="" />
                        <h3 class=" text-black font-medium mb-2">
                          SYNC AND ORGANIZE <br />
                          <small>Keep your notes handy</small>
                        </h3>
                      </div>
                    </ul>
                  </div>
                  <div className="container mx-auto w-full flex mt-10">
                    <ul class="px-4 w-full sm:w-1/2 lg:w-1/4pb-6 pt-6 lg:pt-3">
                      <div class="flex items-center">
                        <img src={notes_book} className="mr-3" alt="" />
                        <h3 class=" text-black font-medium mb-2">
                          SYNC AND ORGANIZE <br />
                          <small>Keep your notes handy</small>
                        </h3>
                      </div>
                    </ul>
                    <ul class="px-4 w-full sm:w-1/2 lg:w-1/4pb-6 pt-6 lg:pt-3">
                      <div class="flex items-center">
                        <img src={notes_book} className="mr-3" alt="" />
                        <h3 class=" text-black font-medium mb-2">
                          SYNC AND ORGANIZE <br />
                          <small>Keep your notes handy</small>
                        </h3>
                      </div>
                    </ul>
                    <ul class="px-4 w-full sm:w-1/2 lg:w-1/4pb-6 pt-6 lg:pt-3">
                      <div class="flex items-center">
                        <img src={notes_book} className="mr-3" alt="" />
                        <h3 class=" text-black font-medium mb-2">
                          SYNC AND ORGANIZE <br />
                          <small>Keep your notes handy</small>
                        </h3>
                      </div>
                    </ul>
                    <ul class="px-4 w-full sm:w-1/2 lg:w-1/4pb-6 pt-6 lg:pt-3">
                      <div class="flex items-center">
                        <img src={notes_book} className="mr-3" alt="" />
                        <h3 class=" text-black font-medium mb-2">
                          SYNC AND ORGANIZE <br />
                          <small>Keep your notes handy</small>
                        </h3>
                      </div>
                    </ul>
                  </div>
                  <div className="text-green-600 p-10 container mx-auto">
                    <a href="s" className="flex space-x-4 items-center">
                      <span className="">SEE ALL FEATURES</span>{" "}
                      <BsArrowRight className="" />
                    </a>
                  </div>
                </div>
              </li>
              <li className="hoverable">
                <a
                  href="i"
                  className="font-medium hover:text-green-600 hover:border-b-4 border-green-600 hover:py-6"
                >
                  FOR INDIVIDUALS
                </a>
                <div class="mt-6  mega-menu mb-16 sm:mb-0 border-t-2 shadow-gray-300 shadow-xl bg-white">
                  <div class="container w-2/3 flex translate-x-48">
                    <ul class="px-4 w-full sm:w-1/2 lg:w-1/4pb-6 pt-6 lg:pt-3">
                      <div class="flex items-center">
                        <img src={notes_book} className="mr-3" alt="" />
                        {/* <svg class="h-8 mb-3 mr-3 fill-current text-white"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z"/>
                        </svg> */}
                        <h3 class=" text-black font-medium mb-2">
                          SYNC AND ORGANIZE <br />
                          <small>Keep your notes handy</small>
                        </h3>
                      </div>
                    </ul>
                    <ul class="px-4 w-full sm:w-1/2 lg:w-1/4pb-6 pt-6 lg:pt-3">
                      <div class="flex items-center">
                        <img src={notes_book} className="mr-3" alt="" />
                        <h3 class=" text-black font-medium mb-2">
                          SYNC AND ORGANIZE <br />
                          <small>Keep your notes handy</small>
                        </h3>
                      </div>
                    </ul>
                    <ul class="px-4 w-full sm:w-1/2 lg:w-1/4pb-6 pt-6 lg:pt-3">
                      <div class="flex items-center">
                        <img src={notes_book} className="mr-3" alt="" />
                        <h3 class=" text-black font-medium mb-2">
                          SYNC AND ORGANIZE <br />
                          <small>Keep your notes handy</small>
                        </h3>
                      </div>
                    </ul>
                  </div>
                  <div className="text-green-600 p-10 container mx-auto">
                    <a href="s" className="flex space-x-4 items-center">
                      <span className="">COMPARE PLANS</span>{" "}
                      <BsArrowRight className="" />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a href="#"
                  className="font-medium hover:text-green-600 hover:border-b-4 border-green-600 hover:py-6"
                >
                  FOR TEAMS
                </a>
              </li>
            </ul>
          </div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Help
              </a>
            </li>
            <li>
              <Link to={"/log-in"} href="#" className="hover:text-gray-300">
                Log In
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="border-solid border-2 border-green-600 px-5 py-2 text-green-500 hover:text-green-300"
              >
                Download
              </a>
            </li>
          </ul>
          </div>
      </nav>

      
      {/* <nav className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a className="text-white text-2xl font-bold" href="#">Logo</a>
          </div>
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li><a className="text-white" href="#">Home</a></li>
              <li><a className="text-white" href="#">About</a></li>
              <li><a className="text-white" href="#">Services</a></li>
              <li><a className="text-white" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {/* <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col space-y-4">
          <li><a className="text-white" href="#">Home</a></li>
          <li><a className="text-white" href="#">About</a></li>
          <li><a className="text-white" href="#">Services</a></li>
          <li><a className="text-white" href="#">Contact</a></li>
        </ul>
      </div>
    </nav> */}
    </div>
  );
};

export default Navbar;
