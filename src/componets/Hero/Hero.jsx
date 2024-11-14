import React from "react";
import hero_image from "../Assets/hero_image.png"
import "./Hero.css";


function Hero(){

return(

<div className="hero">


<div className="hero-left">
     <h2>New Arrivals Only</h2>
<div>
<p>new</p>
<p>collections</p>
<p>for everyone</p>

<div className="hero-latest-btn">
     <div>Latest collections  </div>
</div>
</div>

</div>



<div className="hero-right">
<img src={hero_image} alt="image" />
</div>


</div>


)



    
}

export default Hero;