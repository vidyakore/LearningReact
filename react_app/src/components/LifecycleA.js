import React, {Component} from "react";
import LifeCycleB from "./LifecycleB";

class LifecycleA extends Component{

    constructor(props) {
        super(props)

        this.state = {
            name: 'Vidya'
        }
        console.log('LifecycleA in constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA in getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleA in componenetDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifeCycleA shouldComponetUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'codeVolution'
        })
    }
    render() {
        console.log('LifecycleA in render')
        return (
        <div>
            <h2>Video No - 23 [Component Mounting  Lifecycle]</h2>
            <div>LifecycleA</div>
            <h2>Video No - 24 [Component Updating  Lifecycle]</h2>
            <button onClick={this.changeState}>Change State</button>
            <LifeCycleB/>
        </div>)
    }
}

export default LifecycleA