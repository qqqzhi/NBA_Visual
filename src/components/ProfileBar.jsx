import React from 'react';
import '../styles/ProfileBar.css'


export class ProfileBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        const {
            teamAbbreviation,
            teamCity,
            teamName,
            playerName,
            height,
            weight,
            playerId,
            pts,
            reb,
            ast,
            pie,
        } = this.props.playerInfo;
        //const playerInfo = this.props.playerInfo;
        //console.log("In profile......", playerName, height, weight, pts, reb, ast, pie, teamName, teamCity)
        //console.log(this.props.playerInfo)
        return (
            <div>
                <div>
                    <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerId}.png`} style={{width:"100%"}}/>
                </div>
                <div className="profile-item">
                    <div className="profile-tag"><strong>Name:</strong></div>
                    <div className="profile-content"> {playerName} </div>
                </div>
                <div className="profile-item">
                    <div className="profile-tag"><strong>Team City:</strong> </div>
                    <div className="profile-content">{teamCity}</div>
                </div>
                <div className="profile-item">
                    <div className="profile-tag"><strong>Team:</strong></div>
                    <div className="profile-content">{teamName}</div>
                </div>
                <div>
                    <img src={`http://stats.nba.com/media/img/teams/logos/${teamAbbreviation}_logo.svg`} style={{width:"100%"}}/>
                </div>
                <div className="profile-item">
                    <div className="profile-tag"><strong>Height:</strong></div>
                    <div className="profile-content">{height}</div>
                </div>
                <div className="profile-item">
                    <div className="profile-tag"><strong>Weight:</strong></div>
                    <div className="profile-content">{weight}</div>
                </div>
                <div className="profile-item">
                    <div className="profile-tag"><strong>PTS:</strong></div>
                    <div className="profile-content">{pts}</div>
                </div>
                <div className="profile-item">
                    <div className="profile-tag"><strong>REB:</strong></div>
                    <div className="profile-content">{reb}</div>
                </div>
                <div className="profile-item">
                    <div className="profile-tag"><strong>AST:</strong></div>
                    <div className="profile-content">{ast}</div>
                </div>
                <div className="profile-item">
                    <div className="profile-tag"><strong>PIE:</strong></div>
                    <div className="profile-content">{pie}</div>
                </div>
            </div>
        )
    }
}
