import React from "react";
import Item from "../Item/Item";
import "./NewCollections.css"
import new_collections from "../Assets/new_collections"

function NewCollections(){
return(
<div className="newCollections">

<h1>NEW COLLECTIONS</h1>
<hr/>

<div className="newCollections-item">
    {new_collections.map((item,index)=>{
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


export default NewCollections;