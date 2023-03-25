import React from "react";

function Columns() {
    const items = []
    return(
        //td can not be child component of div tag it will give us warning in console
        // <React.Fragment>
        //     {
        //         items.map( item => (
        //             <React.Fragment key={item.id}>
        //                 <h1>Title</h1>
        //                 <p>{item.title}</p>
        //             </React.Fragment>
        //         ))
        //     }
        //     <td>Name</td>
        //     <td>Vidya</td>
        // </React.Fragment>

        //short hand operator
        //but we cannot pass key
        <>
            <td>Name</td>
            <td>Vidya</td>
        </>
    )
}

export default Columns