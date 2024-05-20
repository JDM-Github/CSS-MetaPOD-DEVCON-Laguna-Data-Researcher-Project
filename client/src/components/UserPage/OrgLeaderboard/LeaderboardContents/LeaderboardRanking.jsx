import React from 'react'

const LeaderboardRanking = ({rank}) => {
  console.log('Ranking: ', rank);
  return (
    <div className='leaderboardRanking'>
        <text>#{rank}</text>
    </div>
  )
}

export default LeaderboardRanking