// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {latestMatch: {}, recentMatches: [], isLoading: true}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedLatestMatchData = {
      teamBannerUrl: data.team_banner_url,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
      firstInnings: data.latest_match_details.first_innings,
    }
    const recentMatchesData = data.recent_matches
    const updatedRecentMatchesData = recentMatchesData.map(eachMatch => ({
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      result: eachMatch.result,
      matchStatus: eachMatch.match_status,
      id: eachMatch.id,
    }))

    this.setState({
      latestMatch: updatedLatestMatchData,
      recentMatches: updatedRecentMatchesData,
      isLoading: false,
    })
  }

  render() {
    const {latestMatch, recentMatches, isLoading} = this.state
    const {teamBannerUrl} = latestMatch
    return (
      <ul className="team-matches-container">
        {isLoading && (
          <div data-testid="loader">
            <Loader
              type="Oval"
              color="#ffffff"
              height={50}
              width={50}
              className="loader"
            />
          </div>
        )}
        {!isLoading && (
          <>
            <img src={teamBannerUrl} alt="" className="team-banner" />
            <p className="latest-matches-heading"> Latest Matches </p>
            <LatestMatch latestMatch={latestMatch} key={latestMatch.id} />
            <div className="recent-matches-container">
              {recentMatches.map(eachMatch => (
                <MatchCard eachMatch={eachMatch} key={eachMatch.id} />
              ))}
            </div>
          </>
        )}
      </ul>
    )
  }
}

export default TeamMatches
