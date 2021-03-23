import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import PotIMG from '../../assets/asterisco.png';
import { HiArrowCircleLeft } from 'react-icons/hi';

export default function Potencia(){

    function potencializar(){
        var tp1 = document.getElementById('txtp1');
        var tp2 = document.getElementById('txtp2');
        var res = document.getElementById('res');
        var p1 = Number(tp1.value);
        var p2 = Number(tp2.value);
        var pot = p1 ** p2;
        res.innerHTML = `O valor é <strong>${pot}</strong>`;

    }

    return(
        <div className="pot-container">
            <div className="pot-box">
                <h1 className="titulo-pot">POTENCIAÇÃO</h1>
                <div className="imagem"> <img src= { PotIMG } alt="Soma"/> </div>

                <input type="number" id = "txtp1" className = "inputs" placeholder = "0"/>
                <span className = "sinais">*</span>
                <input type="number" id ="txtp2" className = "inputs" placeholder = "0"/>
                <br/>
                <input type="button" value = "Potência" onClick= { potencializar } className = "button-operation"/>
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
       