import React from "react";
import {useState} from "react";
import ReactDOM from "react-dom";

const RevealText =(text,maxLength)=>{
    const [hidden,setHidden]=useState(true)
    if (text.length<=maxLength) {
        return <span>{text}</span>;
    }
    return (
        <span>
          {hidden ? `${"text".substr(0, maxLength).trim()} ...` : text}
          {hidden ? (
            <a onClick={() => setHidden(false)}> read more</a>
          ) : (
            <a onClick={() => setHidden(true)}> read less</a>
          )}
        </span>
      );
}

ReactDOM.render(
<RevealText
    maxLength={32}
    Text={"To many people success means different things. Some people may see success as being rich and having all of the material things that anyone could ever dream of. Other people may see success as being in a place in their life that they never thought could happen. Some people may see owning their first home as being successful, while others see having a job they have always dreamed of as being a true success.The accomplishment of an aim or purpose, success is what motivates people when they are hoping to reach an achievement or hope to be recognized for something that is not easily obtained. So, while some people may see getting a college degree as a success in life, others may pursue the dream of being successful by just doing the best they can in all they do, whether working or taking care of their home"}/>,document.querySelector("#root"));


    export default RevealText;