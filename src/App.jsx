import NavBar from './components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import CartProvider, { CartContext } from './components/CartContext/CartContext'
import { useContext } from 'react'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
      <Route path='/product/:productId' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App
