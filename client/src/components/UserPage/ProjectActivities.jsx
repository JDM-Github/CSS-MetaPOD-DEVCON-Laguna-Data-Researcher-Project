  import React from 'react'
  import './projectActivities.css'
  import ProjectHeader from './Projects/ProjectHeader'
  import ProjectTableHeaders from './Projects/ProjectTableHeaders'
  import ProjectTableContents from './Projects/ProjectTableContents'

  const ProjectActivities = () => {
    return (
      <div className='projectActivities'>
        <ProjectHeader />
        <ProjectTableHeaders />
        <ProjectTableContents />
    </div>
    )
  }

  export default ProjectActivities