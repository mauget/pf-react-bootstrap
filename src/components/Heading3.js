import React, {Component} from 'react';
import '../App.css'

// Note that "Form" is a Bootstrap user interaction layout wrapper, not a PerfectForms form.
export class Heading3 extends Component {

    constructor(props) {
        super(props);
        this.id = props.id;
        this.name = props.name;

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev) {
    }

    render() {
        return <h3 id={this.id} name={this.name}
                      style={{display: "block"}}>{this.props.children}</h3>;
    }

}

export default Heading3;
