import React from "react";
import { all_products_data } from "../Context/Shopcontext";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../componets/Breadcrumbs/Breadcrumbs";
import ProductDisplay from "../componets/ProductDisplay/ProductDisplay";
import Descriptionbox from "../componets/Descriptionbox/Descriptionbox";
import RelatedProducts from "../componets/RelatedProducts/RelatedProducts";

function Product(){

    const products = {all_products_data};
 const {productId} = useParams();

 const product = all_products_data.find((e)=>e.id == productId);

 console.log(productId);


return (
<div>
    
    <Breadcrumbs 
product = {product}
/>

<ProductDisplay
product ={product}
/>

<Descriptionbox/>

<RelatedProducts/>

    </div>

);

};


export default Product;