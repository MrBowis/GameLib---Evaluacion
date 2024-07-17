import { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Start from '../src/components/Start.jsx';
import Resena from './screens/Resena.jsx'
import Add from './components/add.jsx'
import Dele from './components/delete.jsx'
import Actualizar from './components/update.jsx';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path='/resena' element={<Resena />}></Route>
          <Route path='/add' element={<Add />}></Route>
          <Route path='/delete' element={<Dele />}></Route>
          <Route path='/update' element={<Actualizar />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
