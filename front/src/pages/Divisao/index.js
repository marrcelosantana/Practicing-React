import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import DivImg from '../../assets/divisao.png';
import { HiArrowCircleLeft } from 'react-icons/hi';

export default function Divisao(){

    function dividir(){
        var ta1 = document.getElementById('txta1');
        var ta2 = document.getElementById('txta2');
        var res = document.getElementById('res');
        var a1 = Number(ta1.value);
        var a2 = Number(ta2.value);
        var div = a1 / a2;

        res.innerHTML = `O valor é <strong>${div.toFixed(2)}</strong>`;
    }

    return(
        <div className="div-container">
            <div className="div-box">
                <h1 className="titulo-div">DIVISÃO</h1>
                <div className="imagem"> <img src= { DivImg } alt="Dividir"/> </div>

                <input type="number" id = "txta1" className = "inputs" placeholder = "0"/>
                <span className = "sinais">/</span>
                <input type="number" id = "txta2" className = "inputs" placeholder = "0"/>
                <br/>
                <input type="button" value="Dividir" onClick= { dividir } className = "button-operation"/>
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
       