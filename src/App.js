import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import OrdenesDeVenta from './Components/OrdenesDeVenta/OrdenesDeVenta.jsx'
import ComprarAcciones from './Components/ComprarAcciones/ComprarAcciones.jsx'
import Acciones from './Components/Usuario/Acciones.jsx';
import './App.css';
import StickyFooter from './Components/Footer/Footer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App Site">
        <div className="Site-content">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={OrdenesDeVenta} />
              <Route path="/ordenesVenta" component={OrdenesDeVenta} />
              <Route path="/acciones" component={Acciones} />
              <Route path="/comprar" component={ComprarAcciones} />
            </Switch>
          </BrowserRouter>
          </div>
          <StickyFooter/>
      </div>
    );
  }
}

export default App;

