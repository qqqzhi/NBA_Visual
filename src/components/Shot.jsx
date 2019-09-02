import React from 'react';
import nba from 'nba';
import * as d3 from 'd3';
import { hexbin } from 'd3-hexbin';
import { court, shots } from 'd3-shotchart';
import '../styles/Shot.css'

window.d3_hexbin = {hexbin : hexbin}; // workaround library problem


export class Shot extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidUpdate() {
        nba.stats.shots({PlayerID: this.props.playerId})
            .then( (res) => {
                // console.log("shots in Shot Comp:",res.shot_Chart_Detail);
                // 'res.shot_Chart_Detail' is an Array where each is an object
                const data = res.shot_Chart_Detail.map( (oneshot) =>
                    { return {
                        x: (oneshot.locX + 250) / 10,
                        y: (oneshot.locY + 50) / 10,
                        action_type: oneshot.actionType,
                        shot_distance: oneshot.shotDistance,
                        shot_made_flag: oneshot.shotMadeFlag
                        }
                    });
                // console.log("shots in Shot Comp:", data);
                const courtSelection = d3.select("#shot-chart");
                courtSelection.html('');
                const chart_court = court().width(500);
                const chart_shots = shots()
                    .shotRenderThreshold(this.props.shotRenderThreshold)
                    .displayToolTips(this.props.displayToolTips)
                    .displayType(this.props.displayType);
                    //.displayType("hexbin");

                courtSelection.call(chart_court);
                courtSelection.datum(data).call(chart_shots);
                }
            );
    }

    render(){
        return (
            <div id = "shot-chart" style={{margin:"auto"}}>
                {/*<h1>This is Shot component</h1>*/}
                {/*<h2>{this.props.playerId}</h2>*/}
            </div>
        )
    }
}
