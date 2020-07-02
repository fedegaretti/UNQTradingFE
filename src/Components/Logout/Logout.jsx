import React from 'react';
import { Redirect } from 'react-router-dom';

/**
 * @author Fabian Frangella
 * Component for logout
 */

export default function Logout()  {
    localStorage.removeItem('user')
    return (
        <Redirect push to="/"/>
    )
}
