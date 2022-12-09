import React from 'react'
import logo from "../img/logo.png"; 


function About (){
    return (
        <>
            <div class="container-fluid  parse">
    <article>
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="title-section">


              <div class="container d-flex flex-column justify-content-between">

                <div class="row">
                  <div class="col mt-3">
                    <img src="/PAGES/about/Images/logo.svg" alt="kidbazzlogo"></img>
                  </div>

                  <div class="col-md-8">

                    <div class="input-group mb-3 mt-5"><input type="text" class="form-control input-text "
                        placeholder="search products ..."></input>
                      <div class="input-group-append"><button class="btn  btn-lg" type="button" name="search"></button>

                      </div>

                    </div>

                  </div>
                  <div class="col mt-5">
                    <a href=""><button class="filter">DONATE</button></a>
                  </div>


                </div>


              </div>




            </div>
          </div>
        </div>
        </div>
    </article>

  </div>

  <nav>

    <div>
      <ul class="nav-menu">
        <a href="./../../index.html"><li>Home</li></a>
        <a href="./../../PAGES/marketplace/market.html"><li>Marketplace</li></a>
        <a href="/"><li>About</li></a>  
         <a href="./../../PAGES/contact/contact.html"><li>Contact</li></a> 
          <a href="./../../PAGES/login/login.html"><li>Login</li></a>
      </ul>
    </div>

  </nav>


{/* About */}

  <div class="container  mt-5">
    <div class="row">

      <h1  class="we-know">We know how to <tr></tr>
        suprise your kids</h1>
      <div class=" col-md-6 col-lg-4 my-3">
        <div class="card">
          <img src="https://images.pexels.com/photos/1569174/pexels-photo-1569174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  ></img>
        </div>
      </div>
      <div class="col-md-6 col-lg-8 my-3">
        <div class="card">
          <img src="https://images.pexels.com/photos/1866654/pexels-photo-1866654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></img>

        </div>
      </div>
    </div>
              
    <h1 class="we-know">YOUR TOY SWAP CENTER </h1>

    <div class="last-para   text-align-align">
     
      <p>KidBaz provides its Users, Whatever the age or the type of toy the right environment to swap, get or give by
        helping fulfill their exact specifications and demands. Our application focuses on providing our users the suitable
        environment by offering our user the Simplicity and easy swap through facilities. Our application provides a GPS
        locator in order to help our customer locate each other easily</p>
    </div>
   
    


  </div>

 






  <tr></tr>
  <footer>
    <div className="row p-5 d-flex justify-content-center">
      <div className="col-lg-2">

      <img src={logo} alt="kidbazzlogo"></img> <tr></tr>
        <p>We swap high-quality toys, books and valuables <tr></tr>for kids of any age.</p>
        <img src="https://ld-wp73.template-help.com/woocommerce/prod_24608/v2/wp-content/uploads/2019/06/fb.svg" alt=""></img>
        <img src="https://ld-wp73.template-help.com/woocommerce/prod_24608/v2/wp-content/uploads/2019/06/instagram.svg"
          alt=""></img>
        <img src="https://ld-wp73.template-help.com/woocommerce/prod_24608/v2/wp-content/uploads/2019/06/youtube.svg"
          alt=""></img>
        <img src="https://ld-wp73.template-help.com/woocommerce/prod_24608/v2/wp-content/uploads/2019/06/twitter.svg"
          alt=""></img>
      </div>
      

      <div className="col-lg-2">
        <p className="quicklinks">Quick Links</p>
        <p>– About</p>
        <p>– Shop</p>
        <p>– Delivery</p>
        <p>– News</p>
        <p>– Contacts</p>

      </div>

      <div className="col-lg-2">
        <p className="quicklinks">Help</p>
        <p>– FAQs</p>
        <p>– Delivery</p>
        <p>– Payments</p>
        <p>– Returns</p>
        <p>– Contacts</p>

      </div>

      <div className="col-lg-2">
        <p className="quicklinks">Categories</p><tr></tr>
        <p>– FAQs</p>
        <p>– Delivery</p>
        <p>– Payments</p>
        <p>– Returns</p>
        <p>– Contacts</p>

      </div>

      <div className="col-lg-2">
        <p className="quicklinks">Contacts</p>
        <p className="number">
          <ion-icon name="call"></ion-icon>254-100-161
        </p>
        <p>
          <ion-icon name="pin"></ion-icon>254 Souths Suited 21,<tr></tr>
           NRB
        </p>
        <p className="number2">
          <ion-icon name="mail"></ion-icon>kidbiz@info.co.ke
        </p>


      </div>
       <h6>2022 @ kidbiz@info</h6>
    </div>
    </footer>     
        </>
    )
}

export default About;