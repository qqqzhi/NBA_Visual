import React from 'react';
import '../styles/NavBar.css'

import logo from '../assets/nba-logo.jpg'

export class NavBar extends React.Component{
    render(){
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
        )
    }
}
