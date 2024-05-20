import React from 'react'
import OrgLogo from './LeaderboardContents/OrgLogo'
import LeaderboardContent from './LeaderboardContents/LeaderboardContent'
import LeaderboardRanking from './LeaderboardContents/LeaderboardRanking'

const LeaderboardContents = ({rank, style}) => {
  return (
    <div className='leaderboardContentsWrapper'>
      <div className='leaderboardContents' style={style}>
          <OrgLogo />
          <LeaderboardContent />
          <LeaderboardRanking rank={rank} />
      </div>
    </div>
  )
}

export default LeaderboardContents