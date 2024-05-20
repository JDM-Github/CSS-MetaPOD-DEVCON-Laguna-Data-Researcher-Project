import React from 'react'
import ProjectHeaderText from './ProjectHeaderText'
import SeeMoreProjects from './SeeMoreProjects'

const ProjectHeader = () => {
  return (
    <div className='projectHeader'>
        <ProjectHeaderText />
        <SeeMoreProjects />
    </div>
  )
}

export default ProjectHeader