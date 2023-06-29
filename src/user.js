import React from "react";

const User=(props)=>
{
    console.warn("props:",props)
    return(
        <div>
            <h4>User Component</h4>
            <h4>User Name:{props.data.name}</h4>
            <h4>User Age:{props.data.age}</h4>
        </div>
    )
}

export default User;