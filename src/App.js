import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import OrdenesDeVenta from './Components/OrdenesDeVenta.jsx'
import OrdenDeVentaButton from './Components/ComprarAcciones/ComprarAccionesButton.jsx';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={OrdenesDeVenta} />
            <Route path="/ordenesVenta" component={OrdenesDeVenta}/>
            <Route path="/comprar" component={OrdenDeVentaButton}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

