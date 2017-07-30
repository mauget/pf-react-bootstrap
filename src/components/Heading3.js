import React, {Component} from 'react';
import '../App.css'

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
