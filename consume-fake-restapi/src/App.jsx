import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ConsumeUsingFetch from './ConsumeUsingFetch'
import ConsumeUsingAxios from './ConsumeUsingAxios'

function App() {


  return (
    <>
      <h2>Consume Fake Rest API</h2>
        <ConsumeUsingFetch></ConsumeUsingFetch>
        <hr/>
        <ConsumeUsingAxios></ConsumeUsingAxios>
    </>
  )
}

export default App
