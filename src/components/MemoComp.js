import React from "react";

function MemoComp({name}) {
    console.log('Rendering Memo Component')
    return (
        <div>
            {name}
        </div>
    )
}

//It is higher Order component, React.Memo accepts component add some things to that component and returna a new enhanced component
export default React.memo(MemoComp)