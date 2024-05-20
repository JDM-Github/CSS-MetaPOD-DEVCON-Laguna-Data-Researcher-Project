import React from 'react'

const ProjectOrganization = ({organization, className}) => {
  return (
    <div className='projectOrganization'>
        <text className={className}>{organization}</text>
    </div>
  )
}

export default ProjectOrganization