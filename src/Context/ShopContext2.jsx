import React, {createContext, useState} from "react";
import all_products_data from "../componets/Assets/all_product"

export const ShopContext = createContext(null);
var cart_num = 0;
//////////////////////////////////////////////////////////////
function getdefaultCart(){
    let cart = {}
    
    for(let index = 0 ; index < all_products_data.length+1 ; index++){
     
        cart[index] =0;
    
    }
    
    return cart;
    
    }
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function ShopContextProvider(props){

const [cartItems , SetcartItems] = useState(getdefaultCart());



///////////////////////////////////////////////////

function addToCart(itemId){

    cart_num++ ;
console.log(cart_num);
    SetcartItems(prevItems => {
        return{...prevItems,[itemId]:prevItems[itemId]+1}
    })
}

///////////////////////////////////////////////////

function removeFromCart(itemId){
    cart_num--
    console.log(cart_num)

    SetcartItems(prevItems => {
        return{...prevItems,[itemId]:prevItems[itemId]-1}
    })
}
////////////////////////////////////////////////////////////////


const contextValue = {all_products_data , cartItems , addToCart , removeFromCart , cart_num};


console.log(cartItems);

///////////////////////////////////////
 return(
<ShopContext.Provider value={contextValue} >
    {props.children}
</ShopContext.Provider>

 )



}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default ShopContextProvider;