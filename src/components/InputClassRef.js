import React, {Component} from "react";

class InputClassRef extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    focusInput() {
        this.inputRef.current.focus()
    }
    render() {
        return(
            <div>
                <input type="text" ref={this.inputRef}></input>
            </div>
        )
    }
}

export default InputClassRef;