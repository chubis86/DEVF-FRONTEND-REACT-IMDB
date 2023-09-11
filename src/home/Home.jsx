import React from 'react'
import NavComponent from '../nav/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../assets/componentes/Footer/Footer'

export default function Home(){
    return (
        <>
            <NavComponent/>
            <Outlet/>
            <Footer/>
        </>
    )
}