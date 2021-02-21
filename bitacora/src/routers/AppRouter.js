import React from 'react'


import { BitacoraSreen } from '../components/Bitacora/BitacoraSreen';
import { LoginScreen } from '../components/Auth/LoginScreen';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { PublicRoute } from './PublicRoute';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { useSelector } from 'react-redux';

export const AppRouter = () => {

  const { login } = useSelector(state => state.auth)

  console.log(login)

    return (
        <Router>
          <Switch>

            <PublicRoute path="/auth" component = { AuthRouter } estaAutenticado = { login } ></PublicRoute>
            <PrivateRoute exact path = "/bitacora" component = { BitacoraSreen }  estaAutenticado = { login } ></PrivateRoute>
               
            <Redirect to="/auth/login" />

          </Switch>
      </Router>
    )
}
