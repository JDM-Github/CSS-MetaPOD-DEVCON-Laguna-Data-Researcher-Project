import React from 'react'
import Second from './TopThree/Second'
import First from './TopThree/First'
import Third from './TopThree/Third'

const TopThree = () => {
  return (
    <div className='topThreeContainer'>
        <Second />
        <First />
        <Third />
    </div>
  )
}

export default TopThree