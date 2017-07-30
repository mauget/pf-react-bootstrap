import React, {Component} from 'react';
import {FormControl} from 'react-bootstrap';
import '../App.css'

export class Dropdown extends Component {

    constructor(props) {
        super(props);
        this.id = props.id;
        this.name = props.name;
        this.placeholder = props.placeholder;
        this.value = props.value;

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev) {
    }

    render() {
        return <FormControl componentClass="select" name={this.name} id={this.id}>{this.props.children}</FormControl>;
    }

}

export default Dropdown;
