import React from "react";
import exclusive_image from "../Assets/exclusive_image.png"
import "./Offers.css";


function Offers(){

return(

<div className="offers">


<div className="offers-left">
     
<div>
<p>Exclusive </p>
<p>Offers for you</p>
<h2>ONLY ON THE BEST SELLING PRODUCTS</h2>

<button className="offers-latest-btn">
     <div>Check now </div>
</button>
</div>

</div>



<div className="offers-right">
<img src={exclusive_image} alt="image" />
</div>


</div>


)



    
}

export default Offers;