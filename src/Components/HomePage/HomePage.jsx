import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import LoginMenu from "./LoginMenu";
import RegistroMenu from "./RegistroMenu";


export default function HomePage() {
    return (
    <AppBar position="static">
        <Toolbar>
            <img style={{marginLeft: "5vw"}} src={require('../../Images/logo300.png')} alt="UNQTrading Logo" width="130" height="115"/>
            <LoginMenu/>
            <RegistroMenu/>
        </Toolbar>
    </AppBar>
    );
}
