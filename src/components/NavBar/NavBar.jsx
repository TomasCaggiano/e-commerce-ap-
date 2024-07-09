import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import '../images/logo.png'

function NavBar() {
  return (
    <header className="NavBar">
  <Link to="/e-commerce-ap-/">
  <img width = {25} src='https://thumbs.dreamstime.com/z/dise%C3%B1o-vectorial-de-logotipo-negro-nike-sports-logo-vector-listo-para-imprimir-ilustraciones-183282273.jpg?ct=jpeg' alt="logo" />
  </Link>
    <NavLink to="/e-commerce-ap-/category/men's clothing">ropa</NavLink>
    <NavLink to="/e-commerce-ap-/category/electronics">electronica</NavLink>
    <NavLink to="/e-commerce-ap-/category/jewelery">jewelery</NavLink>
  <NavLink to="/e-commerce-ap-/cart">carrito</NavLink>
</header>
  );
}

export default NavBar;


