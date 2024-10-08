
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/Products'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import TodosListings from './pages/TodosListings';
import ResponsiveNavbar from './components/ResponsiveNavbar';

function App() {
  

  return (
    <>
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/todoslistings" element={<TodosListings />} />
      </Routes>
    </Router>
      
    <ResponsiveNavbar />

    
    </>
  )
}

export default App
