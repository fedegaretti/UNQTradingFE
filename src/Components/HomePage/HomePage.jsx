import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import LoginMenu from "./LoginMenu";
import RegistroMenu from "./RegistroMenu";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-bootstrap/cjs/Carousel";


export default function HomePage() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Carousel style={{height: "90vh"}}>
                    <Carousel.Item style={{height: "90vh"}}>
                        <img
                            src={require('../../Images/tradingunq1.png')}
                            alt="tradingunq1"
                            style= {{ 
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                               }}
                        />
                        <Carousel.Caption>
                            <h2 style={{fontFamily: 'Playfair Display', textShadow: '0px 0px 3px #000000'}}>UNQ Trading | Inversiones al alcance de todos</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{height: "90vh"}}>
                        <img
                            src={require('../../Images/trading3.jpg')}
                            alt="trading3"
                            style= {{ 
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                               }}
                        />
                        <Carousel.Caption>
                            <h2 style={{fontFamily: 'Playfair Display', textShadow: '0px 0px 3px #000000'}}>UNQ Trading | El mercado de acciones nunca estuvo tan fácil</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{height: "90vh"}}>
                        <img
                            src={require('../../Images/trading5.png')}
                            alt="trading5"
                            style= {{ 
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                               }}
                        />
                        <Carousel.Caption>
                            <h2 style={{fontFamily: 'Playfair Display', textShadow: '0px 0px 3px #000000'}}>UNQ Trading | Tu lugar para invertir</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Grid item xs={12}>
                    <AppBar position="fixed" style={{background: 'linear-gradient(to bottom, rgba(63, 81, 181, 1), rgba(63, 81, 181, 0.3))'}}>
                        <Toolbar>
                            <Grid container direction="row" justify="space-between" style={{paddingLeft: '5vw', paddingRight: '5vw'}}>
                                <Grid item>
                                    <img style={{marginTop: "5px", marginBottom: "5px"}} src={require('../../Images/logo300.png')} alt="UNQTrading Logo" width="100" height="87"/>
                                </Grid>
                                <Grid container style={{width: 'auto'}} alignItems="center">
                                    <LoginMenu/>
                                    <RegistroMenu/>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
        </Grid>

    );
}
