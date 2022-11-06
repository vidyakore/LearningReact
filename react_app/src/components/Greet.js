import React from "react";

// function Greet() {
//     return <h1>Hello Vidya</h1>

// }

// const Greet = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <h1>Hello {props.name}! {props.heroName} </h1>
//             {props.children}
//         </div>

//     )
// }

//destructring the props and state and destructuring in function parameters 
// const Greet = ({ name, heroName }) => {
//     return (
//         <div>
//             <h1>Hello {name}! {heroName} </h1>

//         </div>

//     )
// }

//destructuring the state in function itself
const Greet = props => {
    const { name, heroName } = props
    return (
        <div>
            <h1>Hello {name}! {heroName} </h1>

        </div>

    )
}

// it will export with the exact name
// export const Greet = () => <h1>Hello Vidya!</h1>    

export default Greet    //can import with any name