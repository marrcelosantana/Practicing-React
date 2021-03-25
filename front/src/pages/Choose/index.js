import React from 'react';
import './styles.css';
import SinaisImg from '../../assets/sinais.png'
import { Link } from 'react-router-dom';
import { HiArrowCircleLeft } from 'react-icons/hi';

export default function Choose(){
    return(
        <div className="choose-container">
            <div className="choose-box">
                <h1 className="choose-titulo">ESCOLHA A OPERAÇÃO</h1>
                <img src= { SinaisImg } alt="sinais" className = "choose-imagem" />
                <br></br>

                <Link className = "gotoadd" to = "/soma">
                    <button className = "choose-button">ADIÇÃO</button>
                </Link>

                <Link className = "gotosub" to = "/sub">
                    <button className = "choose-button">SUBTRAÇÃO</button>
                </Link>
                
                <Link className = "gotomulti" to = "/multi">
                    <button className = "choose-button">MULTIPLICAÇÃO</button>
                </Link>

                <br/>

                <Link className = "gotodiv" to = "/div">
                    <button className = "choose-button">DIVISÃO</button>
                </Link>
                
                <Link className = "gotopot" to = "/pot">
                    <button className = "choose-button">POTENCIAÇÃO</button>
                </Link>

                <Link className = "gotomod" to = "/mod">
                    <button className = "choose-button">MÓDULO</button>
                </Link>
                
                <Link className = "gotobask" to = "/bask">
                    <button className = "choose-button">BHASKARA</button>
                </Link>

                <div className="voltar-choose">
                    <Link className = "back" to ="/">
                        <HiArrowCircleLeft size = { 30 } color = "#346add" className = "circleleft"/>
                    </Link>  
                </div>
                

            </div>
        </div>
    );

}