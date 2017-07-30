import React, {Component} from 'react';
import '../App.css'
import {Button} from 'react-bootstrap';

export class ButtonPF extends Component {

    constructor(props) {
        super(props);
        this.id = props.id;
        this.bsStyle = props.bsStyle;

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(`Button ${this.id} clicked`);
    }

    render() {
        return <Button id={this.id} bsStyle={this.bsStyle}
            onClick={this.handleClick}>{this.props.children}</Button>;
    }

}

export default ButtonPF;
