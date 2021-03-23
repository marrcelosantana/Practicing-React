import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import CalculadoraImg from '../../assets/calculadora.png';
import InstagramImg from '../../assets/instagram.svg';
import LinkedinImg from '../../assets/linkedin.svg';
import GitImg from '../../assets/github.svg';


export default function Principal(){
    return(
        <div className="principal-container">
            <div className="principal-box">
                <h1 className="titulo-principal">CALCULADORA PVP</h1>
                <div className="imagem">
                    <img src= { CalculadoraImg } alt = "Calculadora"/>
                </div>
                <div className="subtitulo">
                    Seja bem-vindo(a)!<br/> Aperte o botão abaixo para começar a calcular.
                </div>
                <Link className = "gotochoose" to = "/choose">
                    <button className="entrar">
                        <FiArrowRight size = { 20 } color = "white" className = "rightarrow"/>
                        COMEÇAR
                    </button>
                </Link> 

                <div className="final">
                    Siga o criador nas redes sociais:
                    <div className="sociais">
                        <a className = 'instagram' href = "https://www.instagram.com/marrcelosantana" target= "_blank" rel="noopener noreferrer">
                            <img src = { InstagramImg } alt = "Insta"/>
                        </a>

                        <div className="space"></div>

                        <a className = 'linkedin' href = "https://www.linkedin.com/in/marcelo-santana-0bab88208" target= "_blank" rel="noopener noreferrer">
                            <img src = { LinkedinImg } alt = "Linkedin"/>
                        </a>

                        <div className="space"></div>   

                        <a className = 'github' href = "https://github.com/marrcelosantana" target= "_blank" rel="noopener noreferrer">
                            <img src = { GitImg } alt = "Github"/>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}