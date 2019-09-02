import React from 'react';
import nba from 'nba'
import 'antd/dist/antd.css';
import {Button, Icon, Input, AutoComplete } from 'antd';
const { Option } = AutoComplete;

export class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataSource : []
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.onSelect = this.onSelect.bind(this)
    }

    handleSearch(playername){
        var items = nba.searchPlayers(playername).slice(0, 5).map( obj => {return {playerId : obj.playerId, fullName : obj.fullName} });
        //console.log(items);
        this.setState({
            dataSource : items
        });
        //console.log(this.state.dataSource);
    };

    onSelect(value, option){
        //console.log("onselect", value);
        //console.log("onselect", option);
        this.props.loadPlayerInfo(value);
    }


    renderOption(item) {
        //console.log("renderoption",item);
        return (
            <Option key={item.playerId} text={item.fullName}>
                <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${item.playerId}.png`} style={{width:"10%"}}/>
                <span>{item.fullName}</span>
            </Option>
        );
    }



    render(){
        return (
            <AutoComplete
                style={{ width: '100%' }}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                dataSource={this.state.dataSource.map(this.renderOption) || ''}
                placeholder="Search player"
                size="large"
                optionLabelProp="null"
            >
                <Input
                    suffix={
                        <Button  className="search-btn"  style={{ marginRight: -12 }} size="large" type="primary">
                            <Icon type="search" />
                        </Button>
                    }
                />
            </AutoComplete>
        )
    }
}
