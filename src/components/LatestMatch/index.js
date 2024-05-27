// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    umpires,
    venue,
    manOfTheMatch,
    result,
    firstInnings,
    secondInnings,
    date,
    competingTeam,
    competingTeamLogo,
  } = latestMatch
  return (
    <div className="latest-match-container">
      <div className="latest-match-details-container">
        <h1 className="latest-match-opp-team-name"> {competingTeam} </h1>
        <p className="details"> {date} </p>
        <p className="details"> {venue} </p>
        <p className="details"> {result} </p>
      </div>
      <div className="latest-match-logo-and-details-sm-container">
        <img
          src={competingTeamLogo}
          alt={competingTeam}
          className="competing-team-logo"
        />
        <div>
          <p className="details"> First Innings </p>
          <p className="details-ans"> {firstInnings} </p>
          <p className="details">Second Innings </p>
          <p className="details-ans"> {secondInnings} </p>
          <p className="details"> Man Of The Match </p>
          <p className="details-ans"> {manOfTheMatch} </p>
          <p className="details"> umpires </p>
          <p className="details-ans"> {umpires} </p>
        </div>
      </div>

      <div className="latest-match-logo-and-details-lg-container">
        <img
          src={competingTeamLogo}
          alt={competingTeam}
          className="competing-team-logo"
        />
        <div>
          <p className="details"> First Innings </p>
          <p className="details-ans"> {firstInnings} </p>
          <p className="details"> Second Innings </p>
          <p className="details-ans"> {secondInnings} </p>
          <p className="details"> Man Of The Match </p>
          <p className="details-ans"> {manOfTheMatch} </p>
          <p className="details"> umpires </p>
          <p className="details-ans"> {umpires} </p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
