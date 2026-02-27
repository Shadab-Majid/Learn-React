//first import the react 
import React from "react";
import Product from "./product";

function NewComponent() {
    return (
        <div><b>
        <Product data= {{name: "Haris", age: 24}}/>
        </b>
        </div>
    )
}

export default NewComponent