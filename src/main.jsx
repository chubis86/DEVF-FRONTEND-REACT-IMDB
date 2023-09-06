import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Movies from './movies/movies.jsx';
import Home from './home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detailmovie from './movies/detailMovie/Detailmovie';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <p>Not found</p>,
    element: <Home/>,
    children : [
      {
        path:"/",
        element: <p>ESTRENOS 2023</p>
      },
      {
        path:"/comedia",
        element: <Movies genero="comedia" key={"comedia"}/>
      },
      {
        path:"/independientes",
        element: <Movies genero="independientes"  key={"independientes"}/>,
        children:[
          {
            path:"independientes/:pelicula",
            element: <Detailmovie key={1}/>        
          }
        ]
      }
    ]
  },
  {
    path:":genero/:pelicula",
    element: <Detailmovie key={2}/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
