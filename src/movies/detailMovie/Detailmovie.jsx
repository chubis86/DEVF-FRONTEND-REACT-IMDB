import React from 'react'
import { useLocation } from 'react-router-dom'


export default function Detailmovie(props) {
  const location = useLocation();
  const movie = location.state;

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{movie.titulo}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img src={movie.portada} alt="" />
                </div>
                <div className="col">
                    <p>{movie.sinopsis}</p>
                    <ul>
                        <li>Director: {movie.director}</li>
                        <li>Actores: {movie.actores.map(actor => {
                            return 
                            <p className="ml-3">{actor}</p>
                             })}
                        </li>
                        <li>Género: {movie.genero}</li>
                        <li>Fecha: {movie.anio}</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}
