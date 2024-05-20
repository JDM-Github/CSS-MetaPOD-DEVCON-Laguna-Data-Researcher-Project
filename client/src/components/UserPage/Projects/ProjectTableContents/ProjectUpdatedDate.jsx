import React from 'react'

const ProjectUpdatedDate = ({updatedAt, className}) => {
  return (
    <div className='projectUpdatedDate'>
        <text className={className}>{updatedAt}</text>
    </div>
  )
}

export default ProjectUpdatedDate