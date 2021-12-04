import React from "react";

const navStyle = {
  minHeight: '10vh',
  border: '1px solid white',
  color: 'black',
  textAlign: 'center',
  backgroundColor: 'red',
  paddingTop: '2vh'
}

export default function Cabecalho() {

  return (
    <>
      <div
        style={navStyle}>
        <h1> Projeto Scripts </h1>
      </div>
    </>
  )
}