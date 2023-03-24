import React, {Component} from "react";
import InputClassRef from "./InputClassRef";

class FocusInputClassRef extends Component {
    constructor(props) {
        super(props)
        this.ComponentRef = React.createRef()
    }

    clickHandler = () => {
        this.ComponentRef.current.focusInput()
    }
    render() {
        return(
            <div>
                <InputClassRef ref= {this.ComponentRef}/>
                {/* what we are trying to acheive is, when we clcik on Focus Input button input box of child component should get focus */}
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInputClassRef;