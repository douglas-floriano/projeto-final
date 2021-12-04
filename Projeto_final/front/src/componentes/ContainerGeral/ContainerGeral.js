import React from "react";
import ContainerSuperior from "../ContainerSuperior/ContainerSuperior";
import AreaDados from "../AreaDados/AreaDados";
import Rodape from "../Rodape/Rodape";
import MenuBotoes from "../MenuBotoes/MenuBotoes.js";

export default function ContainerGeral() {
  return (
    <>
      <div >


        <ContainerSuperior />
        <MenuBotoes />
        <AreaDados />
        <Rodape />
 
      </div>
    </>
  )
}