import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <header className="NavBar">
  <Link to="/">
  <img width={100} src="/logo.png" alt="logo" />
  </Link>
    <NavLink to="/category/men's clothing">ropa</NavLink>
    <NavLink to="/category/electronics">electronica</NavLink>
    <NavLink to="/category/jewelery">jewelery</NavLink>
  <NavLink to="cart">carrito</NavLink>
</header>
  );
}

export default NavBar;


