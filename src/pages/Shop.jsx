import React from "react";
import Navbar from "../componets/Navbar/Navbar";
import Hero from "../componets/Hero/hero";
import Popular from "../componets/Popular/Popular";
import Offers from "../componets/Offers/Offers";
import NewCollections from "../componets/NewCollections/NewColllections";
import Footer from "../componets/Footer/Footer";
import Newsletter from "../componets/Newsletter/Newsletter";

function Shop(){
return (
    <div>
<Hero/>
<Popular/>
<Offers/>
<NewCollections/>
<Newsletter/>

</div>

);

};


export default Shop;