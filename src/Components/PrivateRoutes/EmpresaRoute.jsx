import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/**
 * @author Fabian Frangella
 * Route component used for routing components that should not be accessible without loggin
 */
const EmpresaRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user') !== null &&
        localStorage.getItem('user') !== 'undefined' &&
        JSON.parse(localStorage.getItem('user')).type === "Empresa"
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
)

export default EmpresaRoute