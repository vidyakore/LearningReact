import React, { Component } from "react";

class RefsDemo extends Component {
    constructor( props ) {
        super(props)
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        console.log(this.inputRef);
        this.inputRef.current.focus()
    }

    clickHandler = () => {
      alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <span>
          Input for ref <input type="text" ref={this.inputRef}></input>
        </span>
        <div>
          <button onClick={this.clickHandler}> Click to get value</button>
        </div>
      </div>
    );
  }
}

export default RefsDemo;
