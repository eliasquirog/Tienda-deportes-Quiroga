import React from "react";
import './Header.css'
import logo from '../../imagenes/logo-sport.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo de tienda" />
            <h1>Mundo sport</h1>
            <nav>
                <input type="text" placeholder="Buscar" required/>
                <a href="">ZAPATILLAS </a>
                <a href="">BOTINES</a>
                <a href="">PANTALONES</a>
                <a href="">REMERAS</a>
                <a href="">ACCESORIOS</a>
            </nav>
            <ShoppingCartIcon className= "carrito" color="success" sx={{ fontSize: 40 }} />
        </header>
    )
}

export default Header