import React from 'react'

const Hero = () => {
  return (
    <section className='mt-5 lg:block md:mt-20'>
        <div className='p-5 '>
            <h1 className='lg:text-6xl sm:font-2xl  font-semibold xs:font-medium mb-2 md:text-5xl md:w-10/12 md:mx-auto md:font-medium md:p-2'>Tame your work, organize your life</h1>
            <p className='lg:leading-9 sm:leading-6 mb-2 text-2xl center p-5 md:w-full md:leading-normal'>Remember everything and tackle any project with your notes, tasks, and schedule all <br className='lg:block md:hidden'></br>in one place.</p>
            <a href="hj" className="text-lg font-medium mb-5 border-green-600 bg-green-600 border px-9 
                py-4 text-white" >Sign up for free</a><br />
            <div className='lg:p-6 md:p-2'>
                <a href="h" className="leading- underline hover:text-green-600 lg:block md:hidden">Already have an account? Log in</a>
            </div>
        </div>
    </section>
  )
}

export default Hero