import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.scss'

const Qoutes = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
  return (
    <section className=" bg-gray-100 p-20 md:p-10 md:mt-5">
      <div>
        <Slider {...settings}>
          <div>
            <figure class="max-w-screen-md mx-auto text-center">
              <svg
                className=" h-10 mx-auto mb-3 text-green-600 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path className='' d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <blockquote>
                <p class="text-2xl italic font-medium text-gray-900 dark:text-white">
                  "You can even send emails to Evernote and gather all of the
                  things you need in a single place."
                </p>
              </blockquote>
              <figcaption class="flex items-center justify-center mt-6 space-x-3">
                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <cite class="pr-3 font-medium text-gray-900 dark:text-white">
                    — Business.com
                  </cite>
                </div>
              </figcaption>
            </figure>
          </div>
          <div>
            <h3>
              <figure class="max-w-screen-md mx-auto text-center">
                <svg
                  class="text-green-600 w-10 h-10 mx-auto mb-3  dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                  <p class="text-2xl italic font-medium text-gray-900 dark:text-white">
                    "Evernote is a powerful tool that can help executives,
                    entrepreneurs and creative people capture and arrange their
                    ideas. All you have to do is use it."
                  </p>
                </blockquote>
                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                  <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <cite class="pr-3 font-medium text-gray-900 dark:text-white">
                      — Forbes
                    </cite>
                  </div>
                </figcaption>
              </figure>
            </h3>
          </div>
          <div>
            <h3>
              <figure class="max-w-screen-md mx-auto text-center">
                <svg
                  class="w-10 h-10 mx-auto mb-3 text-green-600 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                  <p class="text-2xl italic font-medium text-gray-900 dark:text-white">
                    "It feels like there are endless ways to use Evernote… Use
                    it for school, work, life, and beyond."
                  </p>
                </blockquote>
                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                  <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <cite class="pr-3 font-medium text-gray-900 dark:text-white">
                      — The Verge
                    </cite>
                  </div>
                </figcaption>
              </figure>
            </h3>
          </div>
          <div>
            <h3>
              <figure class="max-w-screen-md mx-auto text-center">
                <svg
                  class="w-10 h-10 mx-auto mb-3 text-green-600 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                  <p class="text-2xl italic font-medium text-gray-900 dark:text-white">
                    "Consider Evernote to be your go-to hub for not just to-do
                    lists but all of your notes. The organizational
                    possibilities are expansive, and everything syncs across all
                    of your devices that have the app enabled, so you’ll never
                    miss a beat."
                  </p>
                </blockquote>
                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                  <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <cite class="pr-3 font-medium text-gray-900 dark:text-white">
                      — The Verge
                    </cite>
                  </div>
                </figcaption>
              </figure>
            </h3>
          </div>
          <div>
            <h3>
              <figure class="max-w-screen-md mx-auto text-center">
                <svg
                  class="w-10 h-10 mx-auto mb-3 text-green-600 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                  <p class="text-2xl italic font-medium text-gray-900 dark:text-white">
                    "A few years ago, after my computer broke down and I lost
                    all of the notes I had saved to my desktop, I finally
                    decided to embrace the cloud and download Evernote. Since
                    then, I haven’t looked back"
                  </p>
                </blockquote>
                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                  <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <cite class="pr-3 font-medium text-gray-900 dark:text-white">
                      — Entrepreneur Magazine
                    </cite>
                  </div>
                </figcaption>
              </figure>
            </h3>
          </div>
          <div>
            <h3>
              <figure class="max-w-screen-md mx-auto text-center">
                <svg
                  class="w-10 h-10 mx-auto mb-3 text-green-600 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                  <p class="text-2xl italic font-medium text-gray-900 dark:text-white">
                    "Evernote is a powerful tool that can help executives,
                    entrepreneurs and creative people capture and arrange their
                    ideas. All you have to do is use it."
                  </p>
                </blockquote>
                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                  <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <cite class="pr-3 font-medium text-gray-900 dark:text-white">
                      — Forbes
                    </cite>
                  </div>
                </figcaption>
              </figure>
            </h3>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Qoutes