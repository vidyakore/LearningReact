import React, { createElement } from "react";

const Hello = () => {
    // with JSX
    // return (
    //     <div>
    //         <h1>Hello Vidya!!!</h1>
    //     </div>
    // )

    //without JSX
    return React.createElement('div',
        { id: 'hello', className: 'dummy' },

        createElement('h1', null, 'hello vidya'));
}

export default Hello