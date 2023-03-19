import React from "react";

const Stateless = () =>{
    const name= "Components"
    return(
        <div className="set-border">
            <h1>Stateless {name} </h1>
            <p> I Have No state to be Rendered With Me</p>
        </div>
    )
}

export default Stateless