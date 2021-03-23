import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import ModImg from '../../assets/mod.png';
import { HiArrowCircleLeft } from 'react-icons/hi';

export default function Modulo(){

    function modular(){
        var tr1 = document.getElementById('txtr1');
        var tr2 = document.getElementById('txtr2');
        var res = document.querySelector('div#res');
        var r1 = Number(tr1.value);
        var r2 = Number(tr2.value);
        var modulo = r1 % r2;

        if(r2 > r1){
            res.innerHTML = 'Não é possível calcular!';
        }else{
            res.innerHTML = `O resto é <strong>${modulo}</strong>`;
        }

        
    }

    return(
        <div className="mod-container">
            <div className="mod-box">
                <h1 className="titulo-mod">MÓDULO</h1>
                <div className="imagem"> <img src= { ModImg } alt="Modulo"/> </div>

                <input type="number" id = "txtr1" className = "inputs" placeholder = "0"/>
                <span className = "sinais">%</span>
                <input type="number" id = "txtr2" className = "inputs" placeholder = "0"/>
                <br/>
                <input type="button" value = "Módulo" onClick = { modular } className = "button-operation"/>
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
       