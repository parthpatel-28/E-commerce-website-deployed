import React from "react";

import all_products_data from "../componets/Assets/all_product"


 const kids_products = all_products_data.filter(num => num.id >24)
 const women_products = all_products_data.filter(num => num.id <12)
 const men_products = all_products_data.filter(num => num.id<24 && num.id>12 )
 

const products_data = [kids_products , women_products ,men_products]

export  default kids_products;
export {women_products};
export {men_products};
export {all_products_data}