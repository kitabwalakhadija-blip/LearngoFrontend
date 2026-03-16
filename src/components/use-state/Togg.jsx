import { useState } from "react";
function Togg(){
    const[isVisible,SetIsVisible]=useState(true);
    return(
        <div>
            <button onClick={()=> SetIsVisible(!isVisible)}>
                Toggle
            </button>
            {isVisible && <h2>Visible Content</h2>}
        </div>
    );
};
export default Togg;