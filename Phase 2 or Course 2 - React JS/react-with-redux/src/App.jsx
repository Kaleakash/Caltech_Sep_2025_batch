import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './FirstComponent'
import Product from './Product'
import SkillSet from './SkillSet'
import DynamicIncrement from './DynamicIncrement'

function App() {
  

  return (
    <>
    <h2>React with Core Redux </h2>  
    <FirstComponent></FirstComponent>
    <DynamicIncrement></DynamicIncrement>
    <Product></Product>
    <SkillSet></SkillSet>
    </>
  )
}

export default App
