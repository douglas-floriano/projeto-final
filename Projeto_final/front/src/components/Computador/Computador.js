import React from "react";
import { useEffect, useState } from 'react';
import urlApi from '../../service/api';
import TabelaComputador from "../Tabelas/TabelaComputador";

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
export default function Computador() {

  const [computador, setComputador] = useState([])
  useEffect(() => {
    urlApi.get('computador')
      .then(response => response.data)
      .then(response => setComputador(response));
  }, [])

  return (
    <>
      <form>
        <div
          id="idComputador"
          style={divStyle}>
          <div
            className="container-fluid">
            <div
              className="row"
              style={rowStyle}>
              <div
                className="col-md-12">
                <h1> Computadores </h1>
              </div>
            </div>
          </div>
          <div
            style={rowStyle2}>
            <TabelaComputador
              items={computador}
              chave={'/computador/'}
            />
          </div>
        </div>
      </form>
    </>
  )
}