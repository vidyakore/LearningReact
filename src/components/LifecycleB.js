import React, {Component} from "react";

class LifeCycleB extends Component{

    constructor(props) {
        super(props)

        this.state = {
            name: 'Vidya'
        }
        console.log('LifeCycleB in constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB in getDerivedStateFromProps')
        return null
    }
    shouldComponentUpdate() {
        console.log('LifeCycleB shouldComponetUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleB componentDidUpdate')
    }
    componentDidMount() {
        console.log('LifeCycleB in componenetDidMount')
    }
    render() {
        console.log('LifeCycleB in render')
        return (
        <div>
            LifeCycleB
        </div>)
    }
}

export default LifeCycleB