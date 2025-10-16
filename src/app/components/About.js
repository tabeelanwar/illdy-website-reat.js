import React from 'react'

function About() {
  return (
    <div className='mx-auto max-w-7xl'>

        <div className='text-center px-20 space-y-12 mt-12'>
            <h2 className='text-[38px] text-[#545454] font-bold'>About</h2>
            <p className='leading-xl font-semibold text-[#8c9597]'>It is an amazng one-page theme with great features that offers an incredible experience. It is easy to install, make changes, adapt for your business. A modern design with clean lines and styling for a wide variety of content, exactly how a business design should be. You can add as many images as you want to the main header area and turn them into slider.
</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className='border'>
                <div>
                    <div className='border flex justify-end pr-5 '>
                        <div className='py-1 w-16 border font-semibold text-white text-center bg-red-400'>60%</div>
                    </div>
                    <input type='range' className='w-full' />

                    <div>
                        <h2>A <span>Typography</span></h2>
                    </div>
                </div>
            </div>
   <div className='border'>
                <div>
                    <div className='border flex justify-end pr-5 '>
                        <div className='py-1 w-16 border font-semibold text-white text-center bg-red-400'>60%</div>
                    </div>
                    <input type='range' className='w-full' value="90" />

                    <div>
                        <h2>A <span>Typography</span></h2>
                    </div>
                </div>
            </div>

            <div className='border'>
                <div>
                    <div className='border flex justify-end pr-5 '>
                        <div className='py-1 w-16 border font-semibold text-white text-center bg-red-400'>60%</div>
                    </div>
                    <input type='range' className='w-full' />

                    <div>
                        <h2>A <span>Typography</span></h2>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
