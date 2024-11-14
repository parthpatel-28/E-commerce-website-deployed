import React from "react";
import Item from "../Item/Item";
import "./RelatedProducts.css"
import data_product from "../Assets/data"

function RelatedProducts(){
return(
<div className="related-products">

<h1>Related Products</h1>
<hr/>

<div className="related-products-item">
    {data_product.map((item,index)=>{
    return(
        <Item 
        key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price = {item.old_price}
        />
    )
    })}

    
</div>

</div>

    )


}


export default RelatedProducts;