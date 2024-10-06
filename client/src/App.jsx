import React, { useContext } from 'react'
import AppContext from './context/AppContext'
import ShowProduct from './components/product/ShowProduct';
import ProductDetails from './components/product/ProductDetails';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchProduct from './components/product/SearchProduct';
import Register from './components/user/Register';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Login from './components/user/Login';
import Profile from './components/user/Profile';
import Cart from './components/Cart';
import Address from './components/Address';
import Checkout from './components/Checkout';
import TableProduct from './components/TableProduct';
const App = () => {
  return (
        <Router>
          <Navbar />
          <ToastContainer />
          <Routes>
      <Route path='/' element={<ShowProduct />}></Route>
      <Route path='/product/search/:term' element={<SearchProduct />}/>
      <Route path='/product/:id' element={<ProductDetails />}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/cart' element={<Cart/>}/>
      {/* <Route path='/address' element={<Address/>}/> */}
      <Route path='/shipping' element={<Address/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/table' element={<TableProduct/>}/>
      </Routes>
      </Router>
    
  )
}

export default App;
