import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import CartProvider from './components/CartContext/CartContext';
import Cart from './components/Cart/Cart';
import Footer from "./components/Footer/Footer";
import CheckOut from "./components/CheckOut/CheckOut";
function App() {
  return (
    <CartProvider>
      <BrowserRouter basename="/e-commerce-ap-/">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path='/product/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/CheckOut" element={<CheckOut/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;