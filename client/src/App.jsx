import React, { useContext } from 'react'
import AppContext from './context/AppContext'
import ShowProduct from './components/ShowProduct'
// import ShowProduct from './components/product/ShowProduct';
const App = () => {
  // const {data}= useContext(AppContext);
  return (
    <div>
      {/* <h1>Hello Uttam {data}</h1> */}
      <>
      <ShowProduct />
      </>
    </div>
  )
}

export default App
