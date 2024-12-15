import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Whats from './Pages/Whats/Whats';
import Learn from './Pages/Learn/Learn';
import Yog1 from './Pages/YogaPages/Yog1';
import Yog2 from './Pages/YogaPages/Yog2';
import Yog3 from './Pages/YogaPages/Yog3';
import Yog4 from './Pages/YogaPages/Yog4';
import Yog5 from './Pages/YogaPages/Yog5';
import Yog6 from './Pages/YogaPages/Yog6';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login'; // Import Login component
import './App.css';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="whats" element={<Whats />} />
            <Route path="learn" element={<Learn />}>
              <Route path="yog1" element={<Yog1 />} />
              <Route path="yog2" element={<Yog2 />} />
              <Route path="yog3" element={<Yog3 />} />
              <Route path="yog4" element={<Yog4 />} />
              <Route path="yog5" element={<Yog5 />} />
              <Route path="yog6" element={<Yog6 />} />
            </Route>
            <Route path="register" element={<Register />} /> {/* Register route */}
            <Route path="login" element={<Login />} /> {/* Login route */}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
