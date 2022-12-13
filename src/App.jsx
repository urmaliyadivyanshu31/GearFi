import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import './App.css'
import ErrorPage from './pages/ErrorPage';
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Sell from "./pages/Sell";



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
