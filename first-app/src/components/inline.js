import React from 'react'

const styleObject={
    color:"red",
    backgroundColor:"yellow",
    fontWeight:"lighter"

}


const Inline = () => {
    return (
        <div>
            <div style={{backgroundColor:"orange"}}>
                <h1>Full stack Developer</h1>
                <h2 style={styleObject}>Hello from react</h2>
            </div>
        </div>
    )
}

export default Inline;