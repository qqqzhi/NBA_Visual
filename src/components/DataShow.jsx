import React from 'react';
import {Shot} from "./Shot";
import { Radio, Row, Col, Switch, InputNumber} from 'antd';

export class DataShow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            shotRenderThreshold : 2,
            displayType : "hexbin",
            displayToolTips: true
        }
    }

    onshotRenderThresholdChange = (count) => {
        this.setState({ shotRenderThreshold: Number(count) });
    };

    onChartTypeChange = (e) => {
        this.setState({ displayType: e.target.value });
    };

    onTooltipChange = (displayToolTips) => {
        //console.log(displayToolTips);
        this.setState({ displayToolTips });
    };

    render(){
        return(
            <div>
                <Shot
                    playerId = {this.props.playerId}
                    displayType = {this.state.displayType}
                    shotRenderThreshold = {this.state.shotRenderThreshold}
                    displayToolTips = {this.state.displayToolTips}
                />
                <div className="controlPanel">
                    <Row>
                        <Col span={6} offset={5}>
                            <InputNumber
                                min={1}
                                max={10}
                                defaultValue={2}
                                onChange={this.onshotRenderThresholdChange}
                                disabled={this.state.displayType !== "hexbin"}
                            />
                        </Col>

                        <Col span={6}>
                            <Radio.Group onChange={this.onChartTypeChange} value={this.state.displayType}>
                                <Radio value="hexbin">Hexbin</Radio>
                                <Radio value="scatter">Scatter</Radio>
                            </Radio.Group>
                        </Col>

                        <Col span={6}>
                            <Switch
                                checkedChildren="On"
                                unCheckedChildren="Off"
                                defaultChecked
                                onChange={this.onTooltipChange}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
