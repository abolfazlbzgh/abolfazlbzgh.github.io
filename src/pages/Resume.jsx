import React from 'react'
import PageBox from '../components/PageBox/PageBox'
import ResumeTitle from '../components/Resume/ResumeTitle/ResumeTitle'
import EducationIcon from '../components/Icons/EducationIcon'
import AwardIcon from '../components/Icons/AwardIcon'
import WorkIcon from '../components/Icons/WorkIcon'
import EducationItem from '../components/Resume/EducationItem/EducationItem'
import { educations, experiences, awards, skills, knowledges } from '../data/resume'
import ExperienceItem from '../components/Resume/ExperienceItem/ExperienceItem'
import AwardItem from '../components/Resume/AwardItem/AwardItem'
import SkillItem from '../components/Resume/SkillItem/SkillItem'

export default function Resume() {
  const skillMid = (skills.length/2)
  return (
    <PageBox title={'Resume'} >
      <div className=' grid grid-cols-1 lg:grid-cols-2 xl:lg:grid-cols-3 grid-flow-row gap-4'>

        <div className='flex flex-col gap-4'>
          <ResumeTitle title='Experience'>
            <WorkIcon />
          </ResumeTitle>
          {
            experiences.map((experience) => {
              return (
                <ExperienceItem key={experience.id} {...experience} />
              );
            })
          }
        </div>

        <div className='flex flex-col gap-4'>
          <ResumeTitle title='Education'>
            <EducationIcon />
          </ResumeTitle>
          {
            educations.map((education) => {
              return (
                <EducationItem key={education.id} {...education} />
              );
            })
          }
        </div>

        <div className='flex flex-col gap-4'>
          <ResumeTitle title='Awards'>
            <AwardIcon />
          </ResumeTitle>

          {
            awards.map((award) => {
              return (
                <AwardItem key={award.id}{...award} />
              );
            })
          }
        </div>
      </div>

      <div className='flex flex-col justify-start bgBox mt-6 p-4'>
        <h2 className='text-title font-bold text-2xl'>Skills</h2>
        <div className='grid grid-cols-1 mt-4 md:grid-cols-2 grid-flow-row  gap-4 '>
          <div className='flex flex-col gap-4 '>
            {
              skills.slice(0,skillMid).map(skill => {
                return <SkillItem key={skill.id} {...skill} />
              })
            }
          </div>
          <div className='flex flex-col gap-4 '>
            {
              skills.slice(skillMid).map(skill => {
                return <SkillItem key={skill.id} {...skill} />
              })
            }
          </div>
        </div>
      </div>

    </PageBox>
  )
}
