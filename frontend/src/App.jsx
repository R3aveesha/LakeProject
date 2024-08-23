import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import AdminLogin from './pages/AdiminLogin'
import Footer from './common/Footer'

function App() {
  const [count, setCount] = useState(0)

  const userType = localStorage.getItem('userType')

  return (
    <Router>
      <Routes>

          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/AdminLogin' element={<AdminLogin/>}></Route>
          <Route path ="/footer" element={<Footer/>}></Route>
      </Routes>
    </Router>
  
  )
}

export default App
