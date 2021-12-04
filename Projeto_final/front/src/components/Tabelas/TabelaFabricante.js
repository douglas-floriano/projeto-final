import React from 'react';
import { useHistory } from 'react-router-dom';

const divStyle = {
  color: 'white'
}
const aStyle = {
  textAlign: 'center'
}
const button = {
  marginTop: '8vh'
}

export default function TabelaFabricante(props) {

  const history = useHistory()
  function getLinhas() {

    const arrayRegistros = props.items;


    return arrayRegistros.map((item) => {

      return (
        <tr

          key={item.fab_codigo} >
          <td> {item.fab_codigo} </td>
          <td style={{ textAlign: 'left' }}> {item.fab_nome} </td>
          <td style={{ textAlign: 'left' }}> {item.fab_fantasia} </td>
          <td Style={{ textAlign: 'left' }}> {item.fab_pais} </td>
          <td id="editar"> <a
            className="btn btn-dark"
            href={props.chave + item.fab_codigo} > Editar </a></td>
        </tr>
      )
    })
  }

  return (
    <div
      className="container-fluid">
      <table id="tabela"
        className="table table-lg"
        style={divStyle}>
        <thead id="cabecalho_rel">
          <tr
            style={{ textAlign: 'left' }}>
            <th scope="col"> Código </th>
            <th scope="col"> Nome do Fabricante </th>
            <th scope="col"> Nome Fantasia do Fabricante </th>
            <th scope="col"> Pais de Origem </th>
            <th scope="col" style={aStyle}><a href={props.chave + 0} className="btn btn-dark btn-block " > Cadastrar Fabricante </a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
      <div
        className="col-md-12 text-center mb-3">
        <button
          type="submit"
          className="btn btn-dark btn-lg"
          onClick={() => history.push('/')}
          style={button}> Início </button>
      </div>
    </div>
  )
}