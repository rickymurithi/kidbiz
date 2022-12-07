import React from 'react'
import logo from "../img/logo.png";
import { CDBFooter } from 'cdbreact';
import child from "../img/child.png";





function Home() {
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
                    <a href=""><button className="filter">DONATE</button></a>
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
         <a href="./">
            <li>Home</li>
          </a>
          <a href="/About">
            <li>About</li>
            </a>

            <a href="/Login">
            <li>Login</li>
        
          </a>
          <a href="/Market">
            <li>Marketplace</li>
          </a>
          
          <a href=".Contact">
            <li>Contact</li>
          </a>
        </ul>
          
        </nav>

        <div className="container-fluid">
      <div  className="welcome d-flex justify-content-center align-items-center h-50">
        <div className="mt-5 align-items-centre w-20">
        
          <h1 className="for-you">TOYS FOR U!</h1>
          <p className="for-you2">Bring happiness to your children with our help. <tr>Swap interesting toys and storybooks
            using our application .
            <tr></tr>You need a toy we got it</tr></p>
          <a href=""><button className ="filter">Visit Now</button></a>
          
        </div>
    
         <img src={child} className="" alt="" width="250px"></img>  
      </div>
    
      

    </div> 
    </section>

    {/* <section className="">
    <div>
       <div classNam="container">
        <div classNam="row">
          <div className="col-md-8">
            <div className="card card1">
              <div className="row">
                <div className="col-md-8 card-body">
                  <div className ="row p-5 d-flex justify-content-center">
                    <div className="shop-girl">
                      <h1 className="good-girl">Swap</h1>
                      <h3 className ="good-girl2"><span>Girl</span> / 4 -14 years</h3>
                      <a href="#" className="btn btn2  visit-now"><button>Visit now</button></a>

                    </div>
                  </div>
                </div>

                <div className="col-md-4 card-body">
                  <div className ="row p-5 d-flex justify-content-center">
                    <div className ="shop-girl">
                     <img src="./images/toddler-removebg-preview.png" alt="toddler image" className ="toddlerImg" height="50"> </img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card  discount text-center" style="height: 24rem;">
              <div className="card-body">
                <h2>Swaps Upto 50% off .Free delivery</h2>
                <a href="#"  className="btn btn1"><button>Get a Discount</button></a>

              </div>
            </div>
          </div>
        </div>
      </div>

      

      <div classNam="container-fluid ">
        <h2 classNam="age-select text-center">Selection by Age</h2>

        <div classNam="row d-flex justify-content-center">
          <div className="col-lg-2">


            <img className="upto"
              src="https://images.unsplash.com/photo-1534806391029-791d2695c38b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBiYWJ5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt=""></img>

            <div className="place-btn">
              <a href="#" className="btn btn4">UP TO 1 YEAR</a>
            </div>


          </div>





          <div className="col-lg-2">

            <img className="upto"
              src="https://www.canr.msu.edu/contentAsset/image/05451da7-19f8-4261-a8a1-68c439e53368/fileAsset/filter/Resize,Crop,Jpeg/resize_w/600/crop_w/600/crop_h/400/crop_x/0/crop_y/0/jpeg_q/70"
              alt=""></img>

            <div className="place-btn1">
              <a href="#" className="btn btn1">1 YEAR</a>
            </div>


          </div>





          <div className="col-lg-2">

            <img className="upto"
              src="https://t4.ftcdn.net/jpg/02/05/89/89/360_F_205898909_KBTToL0TF7zebCoA3ojBVcSbt6jBMxZW.jpg" alt=""></img>
            <div className="place-btn2">
              <a href="#" className="btn btn2">2-3 YEARS</a>
            </div>

          </div>




          <div className="col-lg-2">
            <img className="upto"
              src="https://ld-wp73.template-help.com/woocommerce/prod_24608/v2/wp-content/uploads/2019/07/0005.jpg"
              alt=""></img>

            <div className="place-btn3">
              <a href="#" className="btn btn3">4 YEARS</a>
            </div>


          </div>

          <div className="col-lg-2">
            <img className="upto"
              src="https://media.istockphoto.com/photos/preschool-kids-picture-id463380223?k=20&m=463380223&s=612x612&w=0&h=SDwuOfrZtgZNZLHBpyKK6AZOfQfMRIvBh0U0xipyFgc="
              alt=""></img>
            <div className="place-btn4">
              <a href="#" className="btn btn3">4 YEARS</a>
            </div>



          </div>








        </div>
      </div>







 

    </div>

  </section> */}

<section className="newsletter d-flex align-items-center justify-content-center">

    <div className="row text-cener ">
      <div className="col">
        <p className="sub-text">subscribe to our</p>
        <div>
          <h2 className="news-text">Newsletter</h2>
          </div>


        <div className="news">


        </div>
        
        <input type="text" placeholder="YOUR EMAIL"></input>
        <button className="subscribe">SUBSCRIBE </button>


        
        
      </div>
    </div>
  </section>
  
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
          <ion-icon name="call"></ion-icon>0100-100-161
        </p>
        <p>
          <ion-icon name="pin"></ion-icon>124 Souths Rohnha Suited 21,<tr></tr>
          Kahawa, NRB
        </p>
        <p className="number2">
          <ion-icon name="mail"></ion-icon>kidbaz@info.co.ke
        </p>


      </div>

    </div>
    </footer>     
   
</div>
    
    );
  }
  
  export default Home;