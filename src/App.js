import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Blogs from './components/Blogs';
import Products from './components/Products';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/Products" element={<Products />} />  
        <Route path="/ContactUs" element={<ContactUs />} />   


        
        
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
