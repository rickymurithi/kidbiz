import React from 'react';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import logo from '../src/img/logo.png';
import "./App.css";
import "./index.css"
// import Market from './components/Market';
import Home from './components/Home';
// import Login3 from './components/login';
import LoginSignup7 from './components/LoginSignup7'
// import About from './components/About';
function App() {


  return (
    <div>
     
       
        {/* <LoginSignup7/> */}
        {/* <About/> */}
          <Router>
           <>
           <Routes>
            
            <Route exact path="/" element= {<LoginSignup7 />}/>
           
           </Routes></>
          </Router> 
          <Home/>
         
     </div>

    
  );
}

export default App;
