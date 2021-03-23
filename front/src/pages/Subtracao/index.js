import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import SubIMG from '../../assets/menos.png';
import { HiArrowCircleLeft } from 'react-icons/hi';

export default function Subtracao(){

    function subtrair(){
        var tm1 = document.getElementById('txtm1');
        var tm2 = document.getElementById('txtm2');
        var res = document.getElementById('res');
        var m1 = Number(tm1.value);
        var m2 = Number(tm2.value);
        var sub = m1 - m2;

        res.innerHTML = `O valor é <strong>${sub}</strong>`;
    }

    return(
        <div className="sub-container">
            <div className="sub-box">
                <h1 className="titulo-sub">SUBTRAÇÃO</h1>
                <div className="imagem"> <img src= { SubIMG } alt="Subtrair"/> </div>

                <input type="number" id = "txtm1" className = "inputs" placeholder = "0"/>
                <span className = "sinais"> - </span>
                <input type="number" id = "txtm2" className = "inputs" placeholder = "0"/>
                <br/>
                <input type="button" value ="Subtrair" onClick = { subtrair } className = "button-operation"/>
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
       