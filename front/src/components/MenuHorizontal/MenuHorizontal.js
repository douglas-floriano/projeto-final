import React from "react";
import 'react-dom';
import './style.css'
import { Link } from 'react-router-dom';


export default function MenuHorizontal() {
  return (
    <>
      <div className="menuHorizontal">
        <nav className="navMenu">
          <ul >
            <li> <Link to="/fabricante"> Fabricante </Link> </li>
            <li> <Link to="" > Computadores </Link> </li>
           
          </ul>
        </nav>
      </div>
    </>
  )
}