import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './FirstComponent'
import Product from './Product'
import SkillSet from './SkillSet'

function App() {
  

  return (
    <>
    <h2>React with Core Redux </h2>  
    <FirstComponent></FirstComponent>
    <Product></Product>
    <SkillSet></SkillSet>
    </>
  )
}

export default App
