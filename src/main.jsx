import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./index.css"
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetail from './pages/VanDetail'
import "./server"

function App() {
  return(
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VANLIFE</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Home  />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />}></Route>
        <Route path='/vans/:id' element={<VanDetail />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
