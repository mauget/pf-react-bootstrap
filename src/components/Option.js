import React, {Component} from 'react';
import '../App.css'

export class Option extends Component {

    constructor(props) {
        super(props);
        this.id = props.id;
        this.value = props.value;

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
    }

    render() {
        return <option id={this.id} value={this.value}
                       onClick={this.handleClick}>{this.props.children}</option>;
    }

}

export default Option;
