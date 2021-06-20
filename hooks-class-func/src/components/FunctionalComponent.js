import { useState } from "react";

const FunctionalComponent=()=>{
    const [counter,setCounter]=useState(0);
    const increase=()=>{
        setCounter(counter+1)
    }
    return(
        <div style={{backgroundColor:"violet"}}>
            <h1>FUNCTIONAL COMPONENT</h1>
            <p>Counter:{counter}</p>
            <button style={{marginBottom:"10px"}} onClick={()=>increase()}>Increase</button>

        </div>
    )
}
export default FunctionalComponent;