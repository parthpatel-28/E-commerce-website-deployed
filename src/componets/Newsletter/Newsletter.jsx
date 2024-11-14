import react from "react";
import "./Newsletter.css"

function Newsletter(){

    return(
                <div className="newsletter">
<h1>Get Exclusive offers on email</h1>
<p>Subscribe to our newsletter and stay updated</p>
       
<div>
<input type="email" placeholder="Type your email" />
<button>Subscribe</button>
</div>


</div> 

    )
}

export default Newsletter;