import React , {useState} from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png"
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext2";
import { useContext } from "react";

function Navbar(){
const[menu,setMenu] = useState("shop")

const {cart_num} = useContext(ShopContext);

return(
<div className="navbar">

<div className="nav-logo">
    <img src={logo} alt="logo"/>
    <p>SHOPPER</p>
</div>

 
    <ul className="nav-menu">
        <li onClick={()=>setMenu("shop")}><Link style={{textDecoration:"none" , color:"#626262"} } to='/E-commerce-website-deployed'>Shop</Link>{menu==="shop"?<hr/>:null} </li>
        <li onClick={()=>setMenu("men")}><Link style={{textDecoration:"none" , color:"#626262"}} to='/men'>Men</Link>{menu==="men"?<hr/>:null}</li>
        <li onClick={()=>setMenu("women")}><Link style={{textDecoration:"none" , color:"#626262"}} to='/women'>Women</Link>{menu==="women"?<hr/>:null}</li>
        <li onClick={()=>setMenu("kids")}><Link style={{textDecoration:"none" , color:"#626262"}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:null}</li>       
    </ul>


<div className="nav-login-cart">

<Link to='/login'><button>Login</button></Link>

<Link to='/cart' ><img src={cart_icon} alt="cart-icon"/></Link>


<div className="nav-cart-count">{cart_num}</div>

</div>

</div>




)

};

export default Navbar;