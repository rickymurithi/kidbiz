import React from 'react'
import logo from "../img/logo.png";
import { NavLink} from 'react-router-dom';
import { CDBFooter } from 'cdbreact';
import child from "../img/child.png";





function Home() {

  // function let(){
  //   return(
  //     alert('thank you for subscribing')
  //   )
  // }

    return (
        <div>
      
        <section className="section-one">
  
  
  
  <div className="container-fluid  parse">
    <article>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="title-section">


              <div className="container d-flex fex-column justify-content-between">

                <div className="row">
                   <div className="col mt-3"> <img src={logo} alt="kidbazzlogo"></img> 

                  </div> 

                  <div className="col-md-8">

                    <div className="input-group mb-3 mt-5"><input type="text" className="form-control input-text "
                        placeholder="search products ..."></input>
                      <div className="input-group-append"><button className="btn  btn-lg" type="button" name="search"></button>

                      </div>

                    </div>
                    </div>
                

                  </div>
                  <div className="col mt-5">
                    <a href="/"><button className="filter">DONATE</button></a>
                  </div>


                </div>


              </div>




            </div>
          </div>
        </div>
    </article>

  </div>

           
         <nav className=" nav-menu">
         <ul class="nav-menu">
  
         <ul class="nav-menu">
        <a href="./../../index.html"><li>Home</li></a>
        <a href="./../../PAGES/about/about.html"><li>About</li></a>
        <a href="./../../PAGES/login/login.html"><li>Login</li></a>
        <a href="./../../PAGES/marketplace/market.html"><li>Marketplace</li></a>
         <a href="./../../PAGES/contact/contact.html"><li>Contact</li></a> 
          
      </ul>
      </ul>
           
          
        </nav>
         <div className="toyss">
        <div className="container-fluid">
      <div  className="welcome d-flex justify-content-center align-items-center h-50">
        <div className="mt-5 align-items-centre w-20">
        
          <h1 className="for-you">TOYS FOR U!</h1>
          <p className="for-you2">Bring happiness to your children with our help. <tr>Swap interesting toys and storybooks
            using our application .
            <tr></tr>You need a toy we got it</tr>
            Kidbiz we make your kid smile</p>
          <a href="/"><button className ="filter">Visit Now</button></a>
          
        </div>
    
         <img src={child} className="" alt="" width="260px"></img>  
      </div>
    
      

    </div> 
    </div>
    </section>

    {/* About */}
    {/* <div class="container  mt-5">
    <div class="row">

     
    </div> 

    <h1 class="we-know">YOUR TOY SWAP CENTER </h1>

    <div class="last-para   text-align-align">
     
      <h4>KidBaz provides its Users, Whatever the age or the type of toy the right environment to swap, get or give by
        helping fulfill their exact specifications and demands. Our application focuses on providing our users the suitable
        environment by offering our user the Simplicity and easy swap through facilities. Our application provides a GPS
        locator in order to help our customer locate each other easily</h4>
    </div>
    <h1  class="we-know">We know how to <tr></tr>
        suprise your kids</h1>
   
    


  </div>
 */}
  
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
   
</div>
    
    );
  }
  
  export default Home;