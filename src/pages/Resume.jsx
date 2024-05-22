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
import KnowledgeItem from '../components/Resume/Knowledge/KnowledgeItem'

export default function Resume() {
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
                <EducationItem  key={education.id} {...education} />
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
                <AwardItem   key={award.id}{...award} />
              );
            })
          }
        </div>
      </div>

      <div className='grid grid-cols-1 mt-6 lg:grid-cols-2 grid-flow-row  gap-4 bgBox'>
        <div className='flex flex-col gap-4 p-4'>
          <h2 className='text-title font-bold text-2xl'>Skills</h2>
          {
            skills.map(skill => {
              return <SkillItem key={skill.id} {...skill} />
            })
          }
        </div>
        <div className='flex flex-col gap-4 p-4'>
          <h2 className='text-title font-bold text-2xl'>Knowledges</h2>
          <div className='flex flex-wrap gap-2 justify-start items-center '>
          {
            knowledges.map(knowledge => {
              return <KnowledgeItem key={knowledge.id} {...knowledge} />
            })
          }
          </div>
          
        </div>
      </div>
    </PageBox>
  )
}
