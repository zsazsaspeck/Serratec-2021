import React from "react";
import { useState } from "react";
function DeveTocar(){
    /*let quad = {
        width: 60,
        height: 60,
        border: 1,
        background: "aqua",
        margin: 28
      }; */
      
     let quad = {
    display: "inline-block",
    padding: ".35em .65em",
    fontSize: ".75em",
    fontWeight: 700,
    lineHeight: 1,
    color: "#fff",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    borderRadius: ".25rem",
    backgroundColor: "#198754",

    }



    const [valor, setValor] = useState(0)

function novoValor(valorAnterior){

    return valorAnterior + 1;
}

const incrementar = () => {
    
    setValor(novoValor);
    setValor((valorAnterior) => valorAnterior)
};



const [valorDois, setValorDois] = useState(0)
function novoValorDois(valorAnteriorDois){

    return valorAnteriorDois + 1;
}

const incrementarDois = () => {
    
    setValorDois(novoValorDois);
    setValorDois((valorAnteriorDois) => valorAnteriorDois)
};
    


    return (
        //<span style={quad} onClick={mudaCor}></span>
        <div>
            <div>
                <p>Ela roubou meu caminhão</p>
                <span style={quad} onClick={incrementar}>{valor}</span>
            </div>
            <div>
                <p>Eu não gosto de ninguém</p>
                <span style={quad} onClick={incrementarDois}>{valorDois}</span>
            </div>
        </div>
    )


}
export default DeveTocar;