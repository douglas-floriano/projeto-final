import React from "react";
import { useEffect, useState } from 'react';
import urlApi from '../../service/api';
import TabelaFabricante from "../Tabelas/TabelaFabricante";

const Style = {
  height: '100%',
  border: '3px ridge white',
  backgroundColor: 'black',
  textAlign: 'center',
  color: 'white'
}

const linha = {
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
          style={Style}>
          <div
            className="container-fluid">
            <div
              className="row"
              style={linha}>
              <div
                className="col-md-12">
                <h1> Fabricantes </h1>
              </div>
            </div>
          </div>
          <div>
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