// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = eachMatch
  const matchStatusClassName = matchStatus === 'Lost' ? 'lost' : 'won'
  console.log(eachMatch)
  return (
    <li className="recent-match-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <h1 className="competing-team-name"> {competingTeam} </h1>
      <p className="result-text"> {result} </p>
      <p className={matchStatusClassName}> {matchStatus} </p>
    </li>
  )
}

export default MatchCard
