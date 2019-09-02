import React from 'react';
import nba from 'nba'
import {Row, Col} from 'antd';
import {SearchBar} from "./SearchBar";
import {ProfileBar} from "./ProfileBar";
import {DataShow} from "./DataShow";


export class MainDisplay extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            playerInfo:{
                playerId:201939,
                playerName:'Stephen Curry',
                teamAbbreviation:'GSW'
            }
        };
        this.loadPlayerInfo = this.loadPlayerInfo.bind(this);
    }

    componentDidMount() {
        //console.log("componentDidMount", this.state.playerInfo.playerId);
        this.loadPlayerInfo(this.state.playerInfo.playerId);
    }

    loadPlayerInfo(playerId){
        //var foundPlayer = nba.findPlayer(playerFullname);
        //console.log("in loadPlayerInfo...", playerId);
        //nba.stats.playerInfo({PlayerID : playerId}).then(console.log);
        nba.stats.playerInfo({PlayerID : playerId})
            .then( (foundPlayerInfo) => {    {/*Here should use arrow function. Strange?*/}
                //debugger;
                //console.log("foundPlayerInfo",foundPlayerInfo);
                const info1 = Object.assign(foundPlayerInfo.commonPlayerInfo[0], foundPlayerInfo.playerHeadlineStats[0]);
                const info2 = Object.assign(this.state.playerInfo, info1);
                //console.log("info1",info1);
                //console.log("info2",info2);
                //console.log("this.state.playerInfo",this.state.playerInfo);
                this.setState({playerInfo:info2});
            });
        //console.log("after loadPlayerInfo...", this.state.playerInfo);
    }

    render(){
        // var playerFullname = this.state.playerInfo.fullName;
        // var foundPlayer = nba.findPlayer(playerFullname);
        // nba.stats.playerInfo({ PlayerID: foundPlayer.playerId })
        //     .then(function (foundPlayerInfo) {
        //         console.log("In maindisplay", foundPlayerInfo.commonPlayerInfo[0]);
        //         console.log("In maindisplay", foundPlayerInfo.playerHeadlineStats[0]);
        //         const returnedPlayerInfo = Object.assign(foundPlayerInfo.commonPlayerInfo[0], foundPlayerInfo.playerHeadlineStats[0]);
        //         console.log(returnedPlayerInfo);
        //     });

        // nba.stats.shots({PlayerID: this.state.playerInfo.playerId})
        //     .then((res)=>{
        //         console.log("shots:",res);
        //         console.log("shot_chart_detail:", res.shot_Chart_Detail.length);
        //         console.log("shot_chart_detail:", res.shot_Chart_Detail[100])
        //     });
        //
        // nba.stats.playerSplits({PlayerID: this.state.playerInfo.playerId})
        //     .then((res)=>{console.log("playerSplits:",res)});
        //
        // nba.stats.playerShooting()
        //     .then((res)=>{console.log("playerShooting:",res)});


        return (
            <div className='MainDisplay' style={{width: '60%', margin:'auto'}}>
                <SearchBar loadPlayerInfo = {this.loadPlayerInfo}/> {/*Passing parent function to child*/}
                <div  style={{marginTop: "8px"}}>
                    <Row style={{backgroundColor:"lightblue"}}>
                        <Col span={6}>
                            <ProfileBar playerInfo = {this.state.playerInfo}/>
                        </Col>
                        <Col span={18}>
                            <DataShow playerId = {this.state.playerInfo.playerId}/>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
