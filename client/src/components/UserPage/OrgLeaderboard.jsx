import React from 'react'
import './orgLeaderboard.css'
import OrgLeaderboardText from './OrgLeaderboard/OrgLeaderboardText'
import TopThree from './OrgLeaderboard/TopThree'
import LeaderboardContents from './OrgLeaderboard/LeaderboardContents'

const OrgLeaderboard = () => {
  const rankings = [4, 5, 6, 7];

  return (
    <div className='orgLeaderboard'>
        <OrgLeaderboardText />
        <TopThree />
        <hr className='line'/>
        {rankings.map((rank, index) => (
          <LeaderboardContents
            key={rank}
            style={{ gridRow: index + 2,}}
            rank={rank}
          />
        ))}
    </div>
  )
}

export default OrgLeaderboard