import { useState, useEffect } from "react";
import CardComponent from "../assets/componentes/Card/Card";
import "./movies.css";

export default function Movies(props){    
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [search, setSearch] = useState("");
    const [pelisFilter, setPelisFilter] = useState([]);
    
/////////////////////////
const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7eda3bf104msh6967cdc48b109afp1d144cjsn7ec6aafad4e3',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

async function prueba(){
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
prueba();
/////////////////////////////
 


    useEffect(()=>{
        if(loading){
            fetch(`https://api-pelis-back.onrender.com/${props.genero}`)
            .then(response=> response.json())
            .then(data => 
                {
                console.log(data);
                setData(data);
                setLoading(false);
                setPelisFilter(data.peliculas)
            })    
        }
        
    }, []);
    
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

    if(loading){
        return 
        <>
            <p>Loading...</p>
        </>
    }else{
        return (
            <>

                <h1 className="titulo">Welcome {data.genero}</h1>
            
             <div className="container-fluid mt-5">
                <div className="row mb-5 text-center">
                    <div className="col">
                        <input type="text" onChange={handleSearch} className="search"  />
                    </div>
                </div>

                <div className="row">
                {pelisFilter.map((movie, index) =>{
                    return (
                    <div className="col cardHover">
                     <CardComponent key={index} movie={movie} /> 
                    </div>
                    )
                })}           
                </div>
            </div>
            </>
        );
    
    }

}