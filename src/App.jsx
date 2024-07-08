import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import CartProvider, { CartContext } from './components/CartContext/CartContext'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="e-commerce-ap-/" element={<ItemListContainer/>}/>
      <Route path="e-commerce-ap-/category/:categoryId" element={<ItemListContainer/>}/>
      <Route path='e-commerce-ap-/product/:productId' element={<ItemDetailContainer/>}/>
      <Route path='e-commerce-ap-/cart' element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App
