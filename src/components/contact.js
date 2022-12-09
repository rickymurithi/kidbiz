import React from 'react'


function Contact(){

    return(
        <>

<section className="newsletter d-flex flex-column align-items-center justify-content-center">

<div className=" text-center p-5">

  <p className="if-you">If You Have Questions</p>

  <h1 className="please">Please Contact Us</h1>

</div>


 <div className="container"> 
<form id="contactForm">
  <div className="d-flex ">
    <input type="text" className="" id="name" placeholder="NAME" required></input>

    <input type="email" className=" " placeholder="EMAIL" id="email" required></input>
   
  </div>
  <div className="col  mt-3">
    <div className="form-group mt-10">
      <textarea name="" id="mess" className="form-control" placeholder="Write your message here (optional)..." cols="10"
        rows="10"></textarea>
    </div>
    </div>
    <div className="text-center p-5">
      <button type="submit" className="subscribe">SUBMIT</button>
    </div>
 
</form>
 </div> 

</section>
        </>
    )
}

