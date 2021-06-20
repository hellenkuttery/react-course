import React from "react";

class ClassComponent extends React.Component{
    constructor(){
        super();
        this.state={
            counter:0
        }
    }


increase(){
    this.setState({counter:this.state.counter+1})
}


render (){
    return(
        <div style={{backgroundColor:"tomato"}}>
             <h1>CLASS COMPONENT</h1>
            <p>Counter:{this.state.counter}</p>
            <button style={{marginBottom:"10px"}} onClick={()=>this.increase()}>Increase</button>

        </div>
    )
}
}

export default ClassComponent;