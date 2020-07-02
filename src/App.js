import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import OrdenesDeVenta from './Components/OrdenesDeVenta/OrdenesDeVenta.jsx'
import ComprarAcciones from './Components/ComprarAcciones/ComprarAcciones.jsx'
import Acciones from './Components/Usuario/Acciones.jsx';
import Registro from './Components/Registro/RegistroForm.jsx';
import RegistroEmpresa from './Components/Registro/RegistroEmpresaForm.jsx';
import './App.css';
import StickyFooter from './Components/Footer/Footer.jsx';
import LoginEmpresa from "./Components/LoginEmpresa/LoginEmpresa";
import LoginPersona from './Components/Login/LoginPersona.jsx';
import CargarSaldo from "./Components/CargarSaldo/CargarSaldo";
import HomePage from "./Components/HomePage/HomePage";

class App extends Component {
  render() {
    return (
      <div className="App Site">
        <div className="Site-content">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/ordenesVenta" component={OrdenesDeVenta} />
              <Route path="/acciones" component={Acciones} />
              <Route path="/comprar" component={ComprarAcciones} />
              <Route path="/registro" component={Registro} />
              <Route path="/RegistrarEmpresa" component={RegistroEmpresa} />
              <Route path="/LoginPersona" component ={LoginPersona} />
              <Route path="/LoginEmpresa" component={LoginEmpresa} />
              <Route path="/CargarSaldo" component={CargarSaldo} />
              <Route path="/HomePage" component={HomePage}/>
            </Switch>
          </BrowserRouter>
          </div>
          <StickyFooter/>
      </div>
    );
  }
}

export default App;

