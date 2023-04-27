import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Registration';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar fixed ="sticky"/>
      <div style = {{
        display: 'flex',
        justifyContent: 'center'
      }}>
      <Routes>
        <Route path="/home" element ={<Homepage/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/register" element = {<Register/>}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
