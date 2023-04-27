import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
        <Navbar/>
        <div style = {{
          backgroundColor: "gray",
          minHeight: "100vh",
          maxHeight: "100vh"
        }}>
          <Routes>
            <Route path="/home" element ={<Homepage/>}/>
            <Route path="/about" element = {<About/>}/>
            <Route path="/contact" element = {<Contact/>}/>
          </Routes>
        </div>
    </>
  );
}

export default App;
