import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import OrdenesDeVenta from './Components/OrdenesDeVenta.jsx'
import ComprarAcciones from './Components/ComprarAcciones/ComprarAcciones.jsx'
import StickyFooter from './Components/Footer/Footer.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={OrdenesDeVenta} />
            <Route path="/ordenesVenta" component={OrdenesDeVenta} />
            {/* Esta ruta es provisoria, acá va la de la tabla de fede en realidad */}
            <Route path="/comprar" component={ComprarAcciones} />
          </Switch>
        </BrowserRouter>
        <StickyFooter/>
      </div>
    );
  }
}

export default App;

