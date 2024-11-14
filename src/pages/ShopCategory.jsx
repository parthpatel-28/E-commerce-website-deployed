import React from "react";
import Item from "../componets/Item/Item";
import { all_products_data } from "../Context/Shopcontext";
import "./CSS/ShopCategory.css"
import women_banner from "../componets/Assets/banner_women.png"

function ShopCategory(props){
 
 
    
return (
<div className="shop-category">

    <img className="banner" src={props.banner} alt="" />


<div className="shop-category-indexsort">

    <p>
        <span>Showing 1-12 </span> out of 36 products
    </p>
</div>





<div className="shopcategory-products">
    {all_products_data.map((item,index)=>{
        if(props.category === item.category){
    return(
        <Item 
        key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price = {item.old_price}
        />
    )
}
    })}

</div>

<div className="shopcategory-loadmore">
    Explore More
</div>

</div>

);
 
};


export default ShopCategory;