import React from "react";
import { useEffect, useState } from 'react';
import urlApi from '../../service/api';
import TabelaFabricante from "../Tabelas/TabelaFabricante";

const divStyle = {
  height: '100%',
  border: '3px ridge red',
  backgroundColor: 'rgba(61,59,61,0.5)',
  textAlign: 'center',
  color: 'white'
}

const rowStyle = {
  marginTop: '5vh'
}

const rowStyle2 = {
  marginTop: '5vh'
}
export default function Fabricante() {

  const [fabricante, setFabricante] = useState([])
  useEffect(() => {
    urlApi.get('fabricante')
      .then(response => response.data)
      .then(response => setFabricante(response));
  }, [])

  return (
    <>
      <form>
        <div
          id="idFabricante"
          style={divStyle}>
          <div
            className="container-fluid">
            <div
              className="row"
              style={rowStyle}>
              <div
                className="col-md-12">
                <h1> Fabricantes </h1>
              </div>
            </div>
          </div>
          <div
            style={rowStyle2}>
            <TabelaFabricante
              items={fabricante}
              chave={'/fabricante/'}
            />
          </div>
        </div>
      </form>
    </>
  )
}