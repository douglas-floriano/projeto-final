import React from "react"
import urlApi from '../../service/api';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";

const label = {
  color: 'white'
}

const h1 = {
  color: 'white'
}


const button = {
  marginTop: '10vh'
}

const formStyle = {
  marginTop: '5vh'
}

const inputStyle = {
  marginTop: '2.5vh'
}

export default function FabricanteEditar() {

  const history = useHistory()



  const [codigo, setCodigo] = useState(0);
  const [nome, setNome] = useState('');
  const [fantasia, setFantasia] = useState('');
  const [pais, setPais] = useState('');


  const { id } = useParams();

  

  useEffect(() => {
    async function getFabricante() {
      if (id === 0) {
      } else {
        const { data } = await urlApi.get('/fabricante/' + id);
        console.log(data)

        setCodigo(data[0].fab_codigo);
        setNome(data[0].fab_nomeFabricante);
        setFantasia(data[0].fab_fantasia);
        setPais(data[0].fab_pais);

        console.log(data[0].fil_nomeFilme)
      }
    }

    getFabricante();
  }, [id]);

  async function handleFabricante(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      if (nome.length === 0) {
        alert('Insira um nome válido')
      } else {
        console.log("Codigo Fabricante: ", id)
        if (id === 0) {
          console.log("Inclusão de Registro!")
          await urlApi.post('filme', data)
            .then(response => alert("Inserção Realizada com Sucesso!!!!"))
        } else {
          console.log("Alteração de Registro! ", id)
          await urlApi.put('/filme/' + id, data)
            .then(response => alert("Alteração Realizada com Sucesso!!!!"))
        }
      }
    } catch (error) {
      alert('Erro no cadastro, tente novamente.')
    }
  }

  return (
    <>
      <div >
        <form
          onSubmit={handleFabricante}
          className="container-fluid" style={formStyle}>
          <div
            className="row">
            <div
              className="col-md-12 text-center">
              <h1
                style={h1}> Formulário de Cadastro </h1>
            </div>
            <div
              className="form-group col-md-6 mb-3"
              style={inputStyle}>
              <label
                style={label}> Codigo </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="fab_codigo"
                value={codigo}
                onChange={e => setCodigo(e.target.value)}
              />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="fab_nomeFabricante" style={label}> Fabricante </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="fab_nomeFabricante"
                value={nome}
                onChange={e => setNome(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="fab_fantasia" style={label}> Nome Fantasia </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="fab_fantasia"
                value={fantasia}
                onChange={e => setFantasia(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="fab_pais" style={label}> País de Origem </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="fab_pais"
                value={pais}
                onChange={e => setPais(e.target.value)} />
            </div>
          </div>
          <div
            className="row">
            <div
              className="col-md-6 text-center">
              <button
                type="submit"
                className="btn btn-dark btn-lg"
                onClick={() => history.push('/filme')}
                style={button}> Voltar </button>
            </div>
            <div
              className="col-md-6 text-center">
              <button
                type="submit"
                className="btn btn-dark btn-lg"
                style={button}> Salvar </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}