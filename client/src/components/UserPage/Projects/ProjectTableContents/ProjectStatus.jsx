import React from 'react'

const ProjectStatus = ({status, className}) => {
  return (
    <div className='projectStatus'>
        <text className={className}>{status}</text>
    </div>
  )
}

export default ProjectStatus