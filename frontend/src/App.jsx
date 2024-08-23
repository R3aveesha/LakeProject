import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Visitor from './routes/Visitor'

function App() {
  const [count, setCount] = useState(0)

  const userType = localStorage.getItem('userType')

  return (
    <Router>
      <Routes>

        {
          userType=="" && (
            <Visitor />
          )
        }
        {
          userType=="loggedUser" && (
            <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/about' element={<AboutPage />}></Route>
              <Route path='/dashboard' element={<HomePage />}></Route>
              <Route path='/profile' element={<AboutPage />}></Route>
            </Routes>
          )
        }
        {
          userType=="admin" && (
            <Routes>
              <Route path='/adminDashboard' element={<AdminDashboard />}></Route>
              <Route path='/AdminProfile' element={<AdminProfile />}></Route>
            </Routes>
          )
        }

      </Routes>
    </Router>
  
  )
}

export default App
