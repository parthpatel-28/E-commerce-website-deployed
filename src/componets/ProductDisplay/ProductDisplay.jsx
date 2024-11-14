import React from "react";
import star_image from "../Assets/star_icon.png"
import star_image_2 from "../Assets/star_dull_icon.png"
import "./ProductDisplay.css"
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext2";

function ProductDisplay(props){
const {product} = props;
const {addToCart} = useContext(ShopContext); 
const {removeFromCart} = useContext(ShopContext); 

    return(
        <div className="productdisplay">

            <div className="productdisplay-left">
     
     <div className="productdisplay-image-list">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
     </div>

     <div className="productdisplay-maain-image">
        <img src={product.image} alt="" className="productdisplay-main-image" />
     </div>
            </div>

            <div className="productdisplay-right">
<h1>{product.name}</h1>

<div className="productdisplay-right-star">
    <img src={star_image} ></img>
    <img src={star_image} ></img>
    <img src={star_image} ></img>
    <img src={star_image} ></img>
    <img src={star_image_2}></img>
    
    <p>(122)</p>
</div>

<div className="productdisplay-right-prices">

<div className="productdisplay-right-old-prices">${product.old_price}</div>
<div className="productdisplay-right-new-prices">${product.new_price}</div>
</div>

<div className="productdisplay-right-description">
a Light witght aks;ofdkaskfpauduohasihaishfiahsfhasiohfioashfhasfih
</div>

<div className="productdisplay-right-size">
    <h1>Select Size</h1>

    <div className="productdisplay-right-sizes">
        <div>S</div>
        <div>M</div>
        <div>L</div>
        <div>XL</div>
        <div>XXL</div> 
    </div>
</div>
<button onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>


            </div>
        </div>
    )

}


export default ProductDisplay