import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CategorizeNav from './components/core/CategorizeNav.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorize" element={<CategorizeNav />} />
      </Routes>
    </Router>
  );
}

export default App;
