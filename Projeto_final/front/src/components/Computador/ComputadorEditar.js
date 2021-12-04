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

export default function ComputadorEditar() {

  const history = useHistory()

  let idBoolean = false;

  const [codigoComputador, setCodigoComputador] = useState(0);
  const [modelo, setModelo] = useState('');
  const [tipo, setTipo] = useState('');
  const [memoria, setMemoria] = useState('');
  const [garantia, setGarantia] = useState('');
  const [fabCodigo, setFabCodigo] = useState('');
  const [checked, setChecked] = useState(false);

  const { id } = useParams();

  function IfCrud() {
    console.log('Id do Computador: ' + id + ' - ' + idBoolean)
    if (id === 0) {
      idBoolean = true;
    } else {
    }
  }

  useEffect(() => {
    async function getComputador() {
      console.log('Computador' + id + ' - ' + idBoolean)
      if (id === 0) {
        setChecked(true);
        console.log('Inclusão de novo registro!')
      } else {
        const { data } = await urlApi.get('/computador/' + id);
        console.log(data)

        setCodigoComputador(data[0].cmp_codigo);
        setModelo(data[0].cmp_modelo);
        setTipo(data[0].cmp_tipo);
        setMemoria(data[0].cmp_memoria);
        setGarantia(data[0].cmp_garantia);
        setFabCodigo(data[0].fab_codigo);

        console.log(data[0].cmp_modelo)
      }
    }
    IfCrud();
    getComputador();
  }, []);

  async function handleComputador(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);



    try {
      if (modelo.length === 0) {
        alert('Insira um modelo')
      } else {
        console.log("Codigo do Computador: ", id)
        if (id === 0) {
          console.log("")
          await urlApi.post('elenco', data)
            .then(response => alert("Sucesso"))
        } else {
          console.log("Alteração de Registro! ", id)
          await urlApi.put('/computador/' + id, data)
            .then(response => alert("Sucesso"))
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
          onSubmit={handleComputador}
          className="container-fluid" style={formStyle}>
          <div
            className="row">
            <div
              className="col-md-12 text-center">
              <h1
                style={h1}> Cadastrar Computador</h1>
            </div>
            <div
              className="form-group col-md-6 mb-3"
              style={inputStyle}>
              <label
                style={label}> Código </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="cmp_codigo"
                value={codigoComputador}
                onChange={e => setCodigoComputador(e.target.value)}
              />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="cmp_modelo" style={label}> Modelo </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="cmp_modelo"
                value={modelo}
                onChange={e => setModelo(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="cmp_tipo" style={label}> Tipo do Computador </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="cmp_tipo"
                value={tipo}
                onChange={e => setTipo(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="cpm_memoria" style={label}> Capacidade de Memória </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="cpm_memoria"
                value={memoria}
                onChange={e => setMemoria(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="cmp_garantia" style={label}> Garantia em Meses </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="cmp_garantia"
                value={garantia}
                onChange={e => setGarantia(e.target.value)} />
            </div>
            <div
              className="form-group col-md-6 mb-3" style={inputStyle}>
              <label
                for="fab_codigo" style={label}> Código do Computador </label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="fab_codigo"
                value={fabCodigo}
                onChange={e => setFabCodigo(e.target.value)} />
            </div>
          </div>
          <div
            className="row">
            <div
              className="col-md-6 text-center">
              <button
                type="submit"
                className="btn btn-dark btn-lg"
                onClick={() => history.push('/computador')}
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