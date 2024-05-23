import React from 'react'
import Typewriter from 'typewriter-effect';
import SocialIcon from '../components/Home/Socialcon/SocialIcon';
import linkedinLogo from '../assets/linkedin.svg'
import linkedinLogoHover from '../assets/linkedinHover.svg'
import github from '../assets/github.svg'
import githubHover from '../assets/githubHover.svg'
export default function Home() {
  return (
    //   bg-white rounded-lg shadow-lg
    <div className='homeContainer'>


      <div className='mx-auto pt-5 flex justify-center'>

        <img src='./Images/profile.png' alt="Profile" className=' w-48 h-48 rounded-full bg-primary object-cover lg:w-48 lg:h-48' />
      </div>

      <h1 className='mt-5 text-center text-title text-2xl lg:text-3xl font-bold ' >Abolfazl Bazghandi</h1>

      <div className='mt-5 flex text-title justify-center text-lg lg:text-xl ' >
        <Typewriter
          options={{
            loop: true,
            delay: 75,
          }}
          onInit={(typewriter) => {
            typewriter.pauseFor(1000)
              .typeString('I am a Software Developer')
              .pauseFor(1000)
              .deleteChars(18)
              .typeString('Front-End Developer')
              .pauseFor(1000)
              .deleteChars(19)
              .typeString('Java Developer')
              .pauseFor(1000)
              .deleteChars(14)
              .typeString('Android Developer')
              .pauseFor(1000)
              .deleteChars(17)
              .typeString('Back-End Developer')
              .pauseFor(1000)
              .deleteChars(18)
              .start();
          }}
        />
      </div>


      <div className='flex justify-center gap-4 mt-5 '>
        <SocialIcon
          link='https://www.linkedin.com/in/abolfazl-bazghandi/'
          icon={linkedinLogo}
          hoverIcon={linkedinLogoHover}
        />
        <SocialIcon
          link='https://www.linkedin.com/in/abolfazl-bazghandi/'
          icon={github}
          hoverIcon={githubHover}
        />
      </div>

    </div>
  )
}
