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
import LoginUsuario from './Components/Login/LoginUsuario.jsx';

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
              <Route path="/registro" component={Registro} />
              <Route path="/RegistrarEmpresa" component={RegistroEmpresa} />
              <Route path="/LoginUsuario" component ={LoginUsuario} />
              <Route path="/LoginEmpresa" component={LoginEmpresa} />
            </Switch>
          </BrowserRouter>
          </div>
          <StickyFooter/>
      </div>
    );
  }
}

export default App;

