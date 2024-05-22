import React from 'react'
import PageBox from '../components/PageBox/PageBox'
import infos from '../data/personalInfo'
import DoItem from '../components/About/DoItem/DoItem'
import doItItems from '../data/doItems'
import InfoItem from '../components/About/InfoItem/InfoItem'

export default function About() {
  return (
    <PageBox title={'About Me'} >
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-flow-row lg:gap-x-4 gap-y-4">
        <div className="row-span-2 flex justify-start items-center">

          <img src='./profile.png' alt="Profile" className=' w-11/12 lg:hidden lg:opacity-0 overflow-hidden bg-primary  rounded-lg object-cover' />
          <img src='./profile2.png' alt="Profile" className='hidden opacity-0 lg:flex lg:opacity-100  overflow-hidden bg-primary w-11/12 rounded-lg object-cover' />
        </div>
        <div className="row-span-1 col-span-2  flex flex-col  ">
          <h2 className='text-2xl text-title'>
            Who Am I?
          </h2>
          <p className='text-1xl w-11/12  text'>
            I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.

            My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
          </p>

        </div>
        <div className="row-span-1 col-span-2  ">
          <h2 className='text-2xl text-title'>
            Personal Info
          </h2>
          <div className=' grid grid-cols-1 sm:grid-cols-2  grid-flow-row gap-4 '>
            {
              infos.map((info, index) => {
                if (index == (infos.length - 1)) {
                  return(
                  <div key={info.id} className='col-span-2'>
                    <InfoItem key={info.id} title={info.title} desc={info.desc}>{info.icon}</InfoItem>
                  </div>
                  )

                }
                return <InfoItem key={info.id} title={info.title} desc={info.desc}>{info.icon}</InfoItem>
              })
            }
          </div>

        </div>

      </div>

      <div className='mt-10'>
        <h1 className='text-2xl text-title mb-5'>What I Do!</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-4'>
          {
            doItItems.map(item => {
              return (
                <DoItem key={item.id} title={item.title} desc={item.desc}>{item.icon}</DoItem>
              )
            })
          }
        </div>
      </div>
    </PageBox>

  )
}
