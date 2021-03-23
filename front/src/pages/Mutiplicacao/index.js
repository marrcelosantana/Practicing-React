import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import MultiImg from '../../assets/multi.png';
import { HiArrowCircleLeft } from 'react-icons/hi';

export default function Multiplicacao(){

    function multiplicar(){
        var tc1 = document.getElementById('txtc1');
        var tc2 = document.getElementById('txtc2');
        var res = document.querySelector('div#res');
        var c1 = Number(tc1.value);
        var c2 = Number(tc2.value);
        var mult = c1 * c2;

        res.innerHTML = `O valor é <strong>${mult}</strong>`;
    }

    return(
        <div className="multi-container">
            <div className="multi-box">
                <h1 className="titulo-multi">MULTIPLICAÇÃO</h1>
                <div className="imagem"> <img src= { MultiImg } alt="multiplicar"/> </div>

                <input type="number" id = "txtc1" className = "inputs" placeholder = "0"/>
                <span className = "sinais">x</span>
                <input type="number" id = "txtc2" className = "inputs" placeholder = "0"/>
                <br/>
                <input type="button" value ="Multiplicar" onClick = { multiplicar } className = "button-operation"/>
                <div id = 'res'>Resultado:</div>


                <div className="voltar">
                    <Link className = "back" to ="/choose">
                        <HiArrowCircleLeft size = { 30 } color = "#346add" className = "circleleft"/>
                    </Link>  
                </div>


            </div>

           
            
        </div>
    );
}
       