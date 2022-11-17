import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import OtherPage from './OtherPage'
import Fib from './Fib'

function App() {

  return (
    <div>
    {/* <BrowserRouter> */}
      <Routes>
        <Route index element={<Fib/>} />
        <Route path="/other" element={<OtherPage/>} />
      </Routes>
    {/* </BrowserRouter> */}
    </div>
  )
}

export default App
