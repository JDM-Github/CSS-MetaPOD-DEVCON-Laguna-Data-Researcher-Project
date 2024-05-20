import React from 'react'
import ProjectNameText from './ProjectTableHeaders/ProjectNameText'
import OrganizationText from './ProjectTableHeaders/OrganizationText'
import UpdatedAtText from './ProjectTableHeaders/UpdatedAtText'
import StatusText from './ProjectTableHeaders/StatusText'
import ProfitsText from './ProjectTableHeaders/ProfitsText'

const ProjectTableHeaders = () => {
  return (
    <div className='projectTableHeaders'>
        <ProjectNameText />
        <OrganizationText />
        <UpdatedAtText />
        <StatusText />
        <ProfitsText />
    </div>
  )
}

export default ProjectTableHeaders