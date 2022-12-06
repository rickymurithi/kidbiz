import React from 'react'
import logo from "../img/logo.png";



function Home() {
    return (
        
      <div>
               
        <nav className=" nav-menu">
        <li>Home</li>
          <a href="/Home">
            <li>Marketplace</li>
          </a>
          <a href="./PAGES/about/about.html">
            <li>About</li>
          </a>
          <a href="./PAGES/contact/contact.html">
            <li>Contact</li>
          </a>
          <a href="./PAGES/login/login.html">
            <li>Login</li>
          </a>
        </nav>

        <div className="container-fluid">
      <div  className="welcome d-flex justify-content-center align-items-center h-50">
        <div className="mt-5 align-items-center w-50">
          <h1 className="for-you">TOYS FOR U!</h1>
          <p className="for-you2">Bring happiness to your children with our help.  Swap interesting toys and storybooks
            using our special discount.</p>
          <a href=""><button className="filter">Visit Now</button></a>
        </div>

        {/* <img src="./images/blackchild-removebg-preview.png" alt="" width="550px"> */}

      </div>

    </div>

      </div>
    );
  }
  
  export default Home;