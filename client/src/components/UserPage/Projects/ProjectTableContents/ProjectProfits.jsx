import React from 'react'

const ProjectProfits = ({profits, className}) => {
  return (
    <div className='projectProfits'>
        <text className={className}>{profits}</text>
    </div>
  )
}

export default ProjectProfits