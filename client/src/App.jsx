import React, { useContext } from 'react'
import AppContext from './context/AppContext'
import ShowProduct from './components/product/ShowProduct';
import ProductDetails from './components/product/ProductDetails';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
const App = () => {
  return (
        <Router>
          <Routes>
      <Route path='/' element={<ShowProduct />}></Route>
      <Route path='/product/:id' element={<ProductDetails />}/>
      </Routes>
      </Router>
    
  )
}

export default App;
