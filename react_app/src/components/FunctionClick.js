import React from "react";

function FunctionClick(){
    function clickHandler(){
        console.log('Button Clicked')
    }

return(
    <div>
        {/* event handler is a function and not a function call a */}
        {/* if we give parenthesis after clickHandler it will continuosly log the 'button clicked messege' infinite calls will go regardless of button clicked event */}
        <button onClick={clickHandler}>click</button>
    </div>
)
}
export default FunctionClick


