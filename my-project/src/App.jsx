
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/Products'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import TodosListings from './pages/TodosListings';

function App() {
  

  return (
    <>
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/todos" element={<TodosListings />} />
      </Routes>
    </Router>
      
    
    </>
  )
}

export default App
