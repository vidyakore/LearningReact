import React, {Component} from "react";

class UserGreeting extends Component{
    constructor(props) {
        super(props)

        this.state = {
            isLoggedin : false
        }
    }

    render() {
        //4th approach
        // return (this.state.isLoggedin && <div>Welcome Vidya!</div>)
        //3rd Approach
        return this.state.isLoggedin ? (<div>
        <h2>Conditional Rendering - [Video 16]</h2>
        <div>Welcome Vidya!</div> </div>) : (<div>
                        <h2>Conditional Rendering - [Video 16]</h2>
                        <div>Welcome Guest!</div>
                    </div>)
        //2nd Approach
        // let message;
        // if (this.state.isLoggedin) {
        //     message = <div>
        //     Conditional Rendering - [Video 16]
        //     <div>Welcome Vidya!</div>
        // </div>}
        // else {
        //     message = <div>
        //                 Conditional Rendering - [Video 16]
        //                 <div>Welcome Guest!</div>
        //             </div>
        // }
        //1st Approach
        // if(this.state.isLoggedin) {
        //     return(
        //             <div>
        //                 Conditional Rendering - [Video 16]
        //                 <div>Welcome Vidya!</div>
        //             </div>
        //     )
        // }
        // else {
        //     return(
        //         <div>
        //         Conditional Rendering - [Video 16]
        //         <div>Welcome Guest!</div>
        //     </div>
        //     )
        // }
        // return message;
    }
}

export default UserGreeting