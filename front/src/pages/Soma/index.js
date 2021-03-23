import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import SomaIMG from '../../assets/botao.png';
import { HiArrowCircleLeft } from 'react-icons/hi';

export default function Soma(){

    function somar(){
        var tn1 = document.getElementById('txtn1');
        var tn2 = document.getElementById ('txtn2');
        var res = document.getElementById('res');
        var n1 = Number(tn1.value);
        var n2 = Number(tn2.value);
        var soma = n1 + n2;

        res.innerHTML = `O valor é <strong>${soma}</strong>`;
        
    }

    return(
        <div className="soma-container">
            <div className="soma-box">
                <h1 className="titulo-soma">ADIÇÃO</h1>
                <div className="imagem"> <img src= { SomaIMG } alt="Soma"/> </div>

                <input type="number" name = "txtn1" id = "txtn1" className = "inputs" placeholder = "0"/>
                <span className = "sinais">+</span>
                <input type="number" name = "txtn2" id = "txtn2" className = "inputs" placeholder = "0"/>
                <br/>
                <input type="button" value="Somar" onClick= { somar } className = "button-operation" />
                <div id = "res"> Resultado: </div>


                <div className="voltar">
                    <Link className = "back" to ="/choose">
                        <HiArrowCircleLeft size = { 30 } color = "#346add" className = "circleleft"/>
                    </Link>  
                </div>


            </div>
            
        </div>
    );

}
       