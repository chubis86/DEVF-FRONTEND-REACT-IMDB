import React from 'react'
import perfil from '../../../imagenes/perfil.jpg';
import './Footer.css';
import { FaSquarePhone, FaEnvelope } from "react-icons/fa6";


export default function Footer() {
  return (
    <div className='footer'>
        <div className='col-izq'>
            <img src={perfil} alt="" />
        </div>
        <div className='col-der'>
            <span>ING. EFRÉN NARVÁEZ MANTILLA</span>
            <span><FaSquarePhone/> 2282-54-19-36</span>
            <span><FaEnvelope/> efrennm86@gmail.com</span>
        </div>
    </div>
  )
}
