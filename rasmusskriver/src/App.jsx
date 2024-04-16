import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar.jsx'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Cv from './pages/cv/Cv.jsx'
import Social from './pages/socials/Socials.jsx'
import './App.css'



function App() {
    return (
        <Router>
            <div>
                <NavBar /> 
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/about" element={<About />} />
                    <Route path="/cv" element={<Cv />} />
                    <Route path="/social" element={<Social />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App
