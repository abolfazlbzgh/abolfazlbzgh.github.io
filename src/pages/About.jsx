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

          <img src='./Images/profile.png' alt="Profile" className=' w-11/12 lg:hidden lg:opacity-0 overflow-hidden bg-primary  rounded-lg object-cover' />
          <img src='./Images/profile2.jpg' alt="Profile" className='hidden opacity-0 lg:flex lg:opacity-100  overflow-hidden bg-primary w-11/12 rounded-lg object-cover' />
        </div>
        <div className="row-span-1 col-span-2  flex flex-col  ">
          <h2 className='text-2xl text-title'>
            Who Am I?
          </h2>
          <p className='text-1xl w-11/12  text text-justify'>
            I hold a <b>master's degree in software engineering</b> and a <b>bachelor's degree in computer engineering</b>. My programming journey began in 2013, and I have nearly 10 years of experience. Initially, I worked with various hardware under supervision. Since 2014, my focus has been on <b>Java</b>. I've also learned <b>JavaScript, PHP, SQL, and Python</b> through university courses. In 2018, I pursued a master's degree while working as an <b>Android developer</b>, primarily using Java. My studies included <b>artificial intelligence, software engineering, reinforcement learning, and advanced databases</b>.
          </p>
          <br />
          <p className='text-1xl w-11/12  text text-justify'>
            After four years as an Android developer, I transitioned to a <b>front-end developer</b> role, focusing on <b>JavaScript, React, and Tailwind</b>, and also worked on back-end projects with <b>NodeJS and PHP</b>. I am experienced with <b>SQL databases</b> and familiar with <b>MongoDB</b>. In 2024, I moved to Canada to seek new opportunities. My work experience has honed my <b>teamwork, project management, and version control</b> skills.
          </p>

        </div>
        <div className="row-span-1 col-span-2  ">
          {/* <h2 className='text-2xl text-title'>
            Personal Info
          </h2>
          <div className=' grid grid-cols-1 sm:grid-cols-2  grid-flow-row gap-4 '>
            {
              infos.map((info, index) => {
                if (index == (infos.length - 1)) {
                  return (
                    <div key={info.id} className='col-span-2'>
                      <InfoItem key={info.id} title={info.title} desc={info.desc}>{info.icon}</InfoItem>
                    </div>
                  )

                }
                return <InfoItem key={info.id} title={info.title} desc={info.desc}>{info.icon}</InfoItem>
              })
            }
          </div> */}

        </div>

      </div>

      <div className='mt-10'>
        <h1 className='text-2xl text-title mb-5'>What I Do!</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-4'>
          {
            doItItems.map(item => {
              return (
                <DoItem key={item.id} {...item}></DoItem>
              )
            })
          }
        </div>
      </div>
    </PageBox >

  )
}
