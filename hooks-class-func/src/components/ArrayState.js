import { useState } from "react";

const ListOfThings =()=>{
    const [items,setItems]=useState([]);
    const [itemName,setItemName]=useState("");

    const addItem=(event)=>{
        event.preventDefault();
        setItems([...items,{
            id:items.length,
            name:itemName,
        }]);
        setItemName=""
    }


return(
/* Creating a form to take an value in input*/
<div>
    
    <form submit={addItem}>
        <label>Enter Todo Things</label>
        <input
        name="item"
        type="text"
        value={itemName}
/*This line takes the value when user enter a value in input*/ 
        onChange={e => setItemName(e.target.value)}
        ></input>
               
    </form>

<ul>
    {items.map(item=>(        
        <li key={item.id}>{item.name}</li>
  
    ))}
</ul>
</div>
)

}
export default ListOfThings;