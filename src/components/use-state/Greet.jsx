import { useState } from "react";
function Greet() {
    const[name,setName]=useState("");
    return(
        <div>
            <label>
                name:
            </label>
        <input
        type="text"
         value={name} 
         placeholder="Type here"
         onChange={(e)=>setName(e.target.value)}
        />
        
        
        <h2>
        Hello{name}
        </h2>
        </div>
    );
};
export default Greet;