import { useState, useEffect } from "react";
import CardComponent from "../assets/componentes/Card/Card";
import "./movies.css";
import {Row, Col, Form} from 'react-bootstrap';

export default function Movies(props){    
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [search, setSearch] = useState("");
    const [search2, setSearch2] = useState("");
    const [pelisFilter, setPelisFilter] = useState([]);
    
//////Método para api de las top100 movies
async function top100(){
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7eda3bf104msh6967cdc48b109afp1d144cjsn7ec6aafad4e3',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        //console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}
//////Fin del método para api de las top100 movies

useEffect(()=>{
    if(loading){
        if(`${props.genero}`=='top100'){
            //console.log("No funciona la api en cuestión por exceso de pago");
        }else{
            fetch(`https://api-pelis-back.onrender.com/${props.genero}`)
            .then(response=> response.json())
            .then(data => 
                {
                console.log(data);
                setData(data);
                setLoading(false);
                setPelisFilter(data.peliculas)
                console.log(data.peliculas);
            })
        }        
    }
        
}, []);
    
//Para buscar pelóculas por nombre
    const handleSearch = (e) =>{
        
        let value = e.target.value;
        setSearch(value);

        if(!value){
            setPelisFilter(data.peliculas);
        }else{
            const filterMovies= data.peliculas.filter((movie) => movie.titulo.toLowerCase().includes(search))
            setPelisFilter(filterMovies);
        }
         
    }

//Para buscar películas por calificación
const handleSearch2 = (e) =>{
    console.log(e.target.value);
    setSearch2(e.target.value);
    
    if(e.target.value=='TODO'){
        const filterMovies= data.peliculas;
        setPelisFilter(filterMovies);    
    }else{
        const filterMovies= data.peliculas.filter((movie) => Math.trunc(movie.calificacion)==e.target.value);
        setPelisFilter(filterMovies);
    }
    
         
}


    if(loading){
        return 
        <>
            <p>Loading...</p>
        </>
    }else{
        return (
            <>
            <div className="principal">    
                
                
                <div className="container-fluid mt-5">
                <h1 className="titulo">Welcome {data.genero}</h1>
                    <div className="row mb-5 text-center ">
                        
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-2" controlId="formulario">
                                            <Form.Label>BUSCAR PELÍCULA</Form.Label>
                                            <Form.Control input id='buscar1' type="text" onChange={handleSearch} className="search"  />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-2" controlId="formulario">
                                            <Form.Label>BUSCAR PELÍCULAS POR CALIFICACIÓN</Form.Label>
                                            <Form.Select id='buscar2' defaultValue={6} onChange={handleSearch2} className="search">  
                                                <option>TODO</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>

                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                                                
                        
                        
                    </div>

                    <div className="row filas" >
                    {pelisFilter.map((movie, index) =>{
                        return (
                        <div className="col cardHover">
                        <CardComponent key={index} movie={movie} /> 
                        </div>
                        )
                    })}           
                    </div>
                </div>
            </div>    
            </>
        );
    
    }

}