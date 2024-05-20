import React from 'react'
import DashBoardButton from '../Header/ToggleButton/DashBoardButton.jsx';
import ProjectsButton from '../Header/ToggleButton/ProjectsButton.jsx';                                               

const ToggleButton = () => {
  return (
    <div className='toggleButtonContainer'>
      <div className="leftSection">
        <DashBoardButton />
      </div>
      <div className="rightSection">
        <ProjectsButton />
      </div>
    </div>
  )
}

export default ToggleButton

