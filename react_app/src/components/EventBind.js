import React, {Component} from "react";

class EventBind extends Component
{
    constructor(props) {
        super(props)
        this.state = {
            message: 'helloo!'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'GoodBye!'
    //     })
    //     console.log(this)
    // }

    //4th Approach class Property
    clickHandler = () => {
        this.setState({
            message: 'GoodBye!'
        })
    }
    render(){
        return(
            <div>
                <h2>Event Bind Video [Video No-14]</h2>
                <div>{this.state.message}</div>
                {/* 1st Approach - using bind keyword works perfectly fine but caueses rerender , will generate brand new event handler on every render*/}
                <div><button onClick={this.clickHandler.bind(this)}> Click render method</button></div>
                {/* 2nd approach is to use arrow function */}
                <div> <button onClick={() => this.clickHandler()}> Click(used arrow function in render) </button> </div>
                {/* 3rd Approach - binding in constructor which is better than 1st approach that is binding in render method */}
                <div><button onClick={this.clickHandler}> Click constructor</button></div>
            </div>
        )
    }

}
export default EventBind