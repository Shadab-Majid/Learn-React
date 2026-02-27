//writing first jxs file
import React from "react";  //importing react so it will not show the error while converint in jsx.

function Product({data}) {
    return (
        <div><h1>{data.name} Shadab Majid</h1>age: {data.age}</div>
    );
}

export default Product // exporting because any .jsx can import it and use its content.