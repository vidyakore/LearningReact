import React, { Component } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Vidu'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Vidya'
            })
        }, 2000)
    }
    render() {
        console.log('parent component rendered')
        return(
            <div>
                Parent Component
                {/* <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp> */}
                <MemoComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp