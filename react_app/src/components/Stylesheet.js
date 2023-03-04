import React from 'react';
import './stylesheet.css'
function Stylesheet(props) {
    let classname = props.primary ? 'primary' : '';
    return(<div>
        <h2 className = {`${classname} fontstyle`}>Welcome to video NO:20 CSS</h2>
    </div>)
}

export default Stylesheet