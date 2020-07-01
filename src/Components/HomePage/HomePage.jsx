import React, { useEffect, useState, useRef } from 'react';
import { RestService } from "../../Service/RestService";
import {Fab, AppBar, Toolbar, Typography, Link} from '@material-ui/core';
import { properties } from "../../Properties/properties.js";
import { loginStyles } from '../MaterialDesign/Styles';
import LoginDialog from "./LoginDialog";
import RegistroDialog from "./RegistroDialog";


export default function HomePage() {
    const classes = loginStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <img style={{marginLeft: "5vw"}} src={require('../../Images/logo300.png')} alt="UNQTrading Logo" width="130" height="115"/>
                <LoginDialog/>
                <RegistroDialog/>
            </Toolbar>
        </AppBar>
           );
}
