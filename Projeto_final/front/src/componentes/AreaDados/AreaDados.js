import React from "react";
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom'
import Fabricante from "../Fabricante/Fabricante";
import FabricanteEditar from "../Fabricante/FabricanteEditar";
import Computador from "../Computador/Computador";
import ComputadorEditar from "../Computador/ComputadorEditar";

const divStyle = {
  minHeight: '73.8vh',
  border: '3px solid black',
  marginTop: '0.5vh',
  paddingTop: '2vh',
  backgroundColor: 'red',
  fontSize: '18pt'
}

export default function AreaDados() {
  return (
    <>
      <div
        style={divStyle}>
        <Switch>
          <Route
            exact path="/fabricante"
            component={Fabricante}></Route>
          <Route
            exact path="/fabricante/:id"
            component={FabricanteEditar}></Route>
          <Route
            exact path="/computador"
            component={Computador}></Route>
          <Route
            exact path="/computador/:id"
            component={ComputadorEditar}></Route>
        </Switch>
      </div>
    </>
  )
}