import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import BaskImg from '../../assets/baskhara.png';
import { HiArrowCircleLeft } from 'react-icons/hi';

export default function Baskhara(){
    
    function calcularBask(){
        var tb1 = document.getElementById('txtbk1');
        var tb2 = document.getElementById ('txtbk2');
        var tb3 = document.getElementById ('txtbk3');
        var res = document.getElementById('res-bask');
        var res1 = document.getElementById('res-bask1');
        var res2= document.getElementById('res-bask2');

        var a = Number(tb1.value);
        var b = Number(tb2.value);
        var c = Number(tb3.value);

        var delta = ((b * b) - (4 * a * c));
        var raiz1 = ((-b + (Math.sqrt(delta))) / (2 * a));
        var raiz2 = ((-b - (Math.sqrt(delta))) / (2 * a));

        res.innerHTML = `O valor do <strong>DELTA</strong> é <strong>${ delta }</strong>`;

        if(delta < 0){
            res1.innerHTML = 'Não existe primeira raíz!';
            res2.innerHTML = 'Não existe segunda raíz!';
        }else{
            res1.innerHTML = `O valor da primeira raíz é <strong>${ raiz1.toFixed(1) }</strong>!`;
            res2.innerHTML = `O valor da segunda raíz é <strong>${ raiz2.toFixed(1) }</strong>!`;
        }
    }


    return(
        <div className="bask-container">
            <div className="bask-box">
                <h1 className="titulo-bask">BHASKARA</h1>
                <div className="imagem"> <img src= { BaskImg } alt="Baskhara"/> </div>

                <span><strong>A:</strong></span>
                <input type="number" name = "txtbk1" id = "txtbk1" className = "inputsbk" placeholder = "0"/>
                <br/>
                <span><strong>B:</strong></span>
                <input type="number" name = "txtbk2" id = "txtbk2" className = "inputsbk" placeholder = "0"/>
                <br/>
                <span><strong>C:</strong></span>
                <input type="number" name = "txtbk3" id = "txtbk3" className = "inputsbk" placeholder = "0"/>
                <br/>
                <input type="button" value="CALCULAR" onClick= {calcularBask} className = "button-bask" />
                <div id = "res-bask"> Valor de delta: </div>
                <div id = "res-bask1"> Primeira raiz: </div>
                <div id = "res-bask2"> Segunda raiz: </div>

            <div className="voltar-bask">
                    <Link className = "back" to ="/choose">
                        <HiArrowCircleLeft size = { 30 } color = "#346add" className = "circleleft"/>
                    </Link>  
                </div>
            </div>
        </div>
    );
}