import logo from '../src/img/logo.png';
import "./App.css";
import "./index.css"
import Market from './components/Market';
import Home from './components/Home';
import Login3 from './components/login';
import About from './components/About';
// import {  Router, Routes, Route } from 'react-router-dom';
function App() {


  return (
    <div>
     
        <Home/>
        {/* <About/> */}
          {/* <Router>
            <Routes>
            <Route path="/About" element= {<About />}/>
            </Routes>
          </Router> */}
        
     </div>

    
  );
}

export default App;
