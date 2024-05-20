import React from 'react'
import union from '../../../Assets/Union.png';
import peso from '../../../Assets/pesoIcon.png';

const CoinIcons = () => {
  return (
    <div className='coinIconsContainer'>
        <img className='peso' src={peso} alt="" />
        <img className='bitcoin' src={union} alt="" />
    </div>
  )
}

export default CoinIcons