import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayProduct from './DisplayProduct'
import AddProduct from './AddProduct'

function App() {


  return (
    <>
    <h2>React With Redux Toolkit Example</h2> 
    <AddProduct></AddProduct> 
    <hr/>
    <DisplayProduct></DisplayProduct>
    </>
  )
}

export default App
