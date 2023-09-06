import {Button, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function CardComponent(props){    
    return (
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.movie.portada} />
        <Card.Body>
            <Card.Title>{props.movie.titulo}</Card.Title>
            <Card.Text>
                {props.movie.sinopsis}
            </Card.Text>
            <Link to={`/${props.movie.genero}/${props.movie.titulo}`} state={props.movie}>VER DETALLES...</Link>
        </Card.Body>
        </Card>
        </>
    );
}