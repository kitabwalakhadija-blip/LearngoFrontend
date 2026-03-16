import { useState } from "react"
function ArrUpdate(){
    const[items,setItems]=useState([]);
    const addItem=()=>{
        setItems([...items,"Cat"]);
    }
    return(
        <div>
            <button onClick={addItem}>Add</button>
            {items.map((items,index)=>(
                <h1 key={index}>{items}</h1>
                
            ))}
        </div>

    );
}
export default ArrUpdate;