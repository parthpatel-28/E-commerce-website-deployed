import React from "react";
import "./Cartitems.css"
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext2";
import remove_icon from "../Assets/cart_cross_icon.png";





function Cartitems(){
    const {removeFromCart,cartItems,all_products_data} = useContext(ShopContext); 

    console.log(all_products_data);
    console.log(cartItems);

return(
    

    <div className="cartitems">

<div className="cartitems-format-main">

<p>Products</p>
<p>Title</p>
<p>Price</p>
<p>Quantity</p>
<p>Total</p>
<p>Remove</p>
</div>
<hr/>

{all_products_data.map((e,index)=>{
    if(cartItems[e.id]>0){
        
        return <div>
        <div className="cartitems-format cartitems-format-main" >
            
            <img src={e.image} alt="" className="carticon-product-icon" />
        <p>{e.name}</p>
        <p>{e.old_price}</p>
        <button className="cartitems-quantity">{cartItems[e.id]}</button>
        <p>${e.old_price * cartItems[e.id]}</p>


<img onClick={()=>{removeFromCart(e.id)}} src={remove_icon} alt="" className="carticon-remove-icon" />
        
        </div>
        <hr/>
        </div>
        
    }
    return null;
})}

<div className="cartitems-down ">
<div className="cartitems-total">

<h1>Cart Totals</h1>

<div className="cartitems-total-item">
    <p>Subtotal</p>
    <p>${0}</p>   
</div>

<hr/>
<div className="cartitems-total-item">
    <p>Shipping Fee</p>
    <p>Free</p>
</div>
  <hr />
  <div className="cartitems-total-items">
    <h3>Total</h3>
<h3>${0}</h3>
  </div>

<button>PROCEED TO CHECKOUT</button>
</div>

<div className="cartitems-promocode">
    <p>If you have a promo code Enter here</p>
<div className="cartitems-promobox">
    <input type="text" placeholder="promocode" />
<button>Submit</button>
</div>

</div>
</div>


</div>

)
    

}


export default Cartitems;