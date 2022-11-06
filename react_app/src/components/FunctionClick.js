import React from "react";

function FunctionClick(){
    function clickHandler(){
        console.log('Button Clicked')
    }

return(
    <div>
        {/* eveent handler is a function and not a function call a */}
        <button onClick={clickHandler}>click</button>   
    </div>
)
}
export default FunctionClick