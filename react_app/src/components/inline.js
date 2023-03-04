import React from 'react';
//create an object for styles
const fontStyle = {
    color: 'red',
    fontSize: '54px',
};
function Inline() {
    return(
    <div>
        <h2 style={fontStyle}>Inline Styling</h2>
    </div>
    )
}

export default Inline