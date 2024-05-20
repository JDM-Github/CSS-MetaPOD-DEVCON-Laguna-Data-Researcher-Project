import React from 'react'

const ProjectName = ({name, className}) => {
  return (
    <div className='projectName'>
        <text className={className}>{name}</text>
    </div>
  )
}

export default ProjectName