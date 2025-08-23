import { useState } from "react";

export default function RefactorComponents({children}){
    const [x,setX ] =useState(0);
     console.log("called");
    return(
        <>
           
        <button onClick={()=> setX(x+1)}>icreament x </button>
        {children}
        {x}
        </>
    )
}