// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam
  return (
    <Link to={`/team-matches/${id}`} className="link-tag each-team-container">
      <li className="list-item">
        <div className="ipl-logo-name-container">
          <img src={teamImageUrl} alt={name} className="team-logo" />
          <div className="team-name-container">
            <p className="team-name"> {name} </p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
