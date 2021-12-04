import React from "react";
import { useHistory } from 'react-router-dom';

const menuStyle = {
  minHeight: '10vh',
  border: '1px ridge black',
  backgroundColor: 'rgba(151,148,148,0.5)',
  paddingLeft: '1vw',
  paddingTop: '2vh'
}

const btnStyle = {
  margin: '0.5%',
  minWidth: '15vw',
  marginLeft: '3vw'
}
export default function Menu() {

  const history = useHistory()

  return (
    <>
      <div
        style={menuStyle}>
        <button
          type="button"
          style={btnStyle}
          className="btn btn-dark"
          onClick={() => history.push('/fabricante')}> Fabricante </button>
        <button
          type="button"
          style={btnStyle}
          className="btn btn-dark"
          onClick={() => history.push('/computador')}> Computador </button>
      </div>
    </>
  )
}