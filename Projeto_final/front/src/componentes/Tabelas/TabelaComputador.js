import React from 'react';


const divStyle = {
  color: 'white'
}

const aStyle = {
  textAlign: 'center'
}


export default function TabelaComputador(props) {



  function getLinhas() {

    const arrayRegistros = props.items;
    console.log(arrayRegistros);

    return arrayRegistros.map((item) => {

      return (
        <tr
         
          key={item.cmp_codigo} >
          <td> {item.cmp_codigo} </td>
          <td
            style={{ textAlign: 'left' }}> {item.cmp_modelo} </td>
          <td
            style={{ textAlign: 'left' }}> {item.cmp_tipo} </td>
          <td
            style={{ textAlign: 'left' }}> {item.cpm_memoria} </td>
          <td
            style={{ textAlign: 'left' }}> {item.cmp_garantia} </td>
          <td
            style={{ textAlign: 'left' }}> {item.fab_codigo} </td>

          <td
            id="editar"> <a
              className="btn btn-dark"
              href={props.chave + item.cmp_codigo} > Editar </a></td>
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
            style={{ textAlign: 'center' }}>
            <th scope="col"> Código </th>
            <th scope="col"> Descrição do Modelo </th>
            <th scope="col"> Descrição do Tipo </th>
            <th scope="col"> Memória RAM </th>
            <th scope="col"> Garantia </th>
            <th scope="col"> Código do Fabricante </th>
            <th scope="col" style={aStyle}><a href={props.chave + 0} className="btn btn-dark btn-block " > Cadastrar Computador </a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )
}