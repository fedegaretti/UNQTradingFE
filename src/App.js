import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import OrdenesDeVenta from './Components/OrdenesDeVenta/OrdenesDeVenta.jsx'
import OrdenesDeVentaPersona from './Components/OrdenesDeVenta/OrdenesDeVentaPersona.jsx'
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
import Grid from "@material-ui/core/Grid";
import Logout from './Components/Logout/Logout.jsx';
import EmpresaRoute from './Components/PrivateRoutes/EmpresaRoute.jsx';
import PersonaRoute from './Components/PrivateRoutes/PersonaRoute.jsx';

class App extends Component {
  render() {
    return (
      <Grid container>
        <div className="Site-content">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/registro" component={Registro} />
              <Route path="/RegistrarEmpresa" component={RegistroEmpresa} />
              <Route path="/LoginPersona" component ={LoginPersona} />
              <Route path="/LoginEmpresa" component={LoginEmpresa} />
              <Route path="/HomePage" component={HomePage}/>
              <Route path="/Logout" component={Logout}/>
              <EmpresaRoute path="/ordenesVenta" component={OrdenesDeVenta} />
              <PersonaRoute path="/ordenesVentaPersona" component={OrdenesDeVentaPersona} />
              <PersonaRoute path="/acciones" component={Acciones} />
              <PersonaRoute path="/comprar" component={ComprarAcciones} />
              <PersonaRoute path="/CargarSaldo" component={CargarSaldo} />
            </Switch>
          </BrowserRouter>
        </div>
        <StickyFooter/>
      </Grid>
    );
  }
}

export default App;

