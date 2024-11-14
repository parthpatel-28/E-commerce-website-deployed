import React from "react";
import "./Breadcrumbs.css";
import arrow from "../Assets/breadcrum_arrow.png"


function Breadcrumbs(props){
    const {product} = props 
    return(
        <div className="breadcrumb">
            SHOP<img src={arrow} alt="-"/>HOME<img src={arrow} alt="-"/>{product.category}<img src={arrow} alt="-"/>{product.name}
        </div>
    )
};


export default Breadcrumbs;