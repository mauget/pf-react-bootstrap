import React, {Component} from 'react';
import '../App.css'
import {Radio} from 'react-bootstrap';

export class Radiobutton extends Component {

    constructor(props) {
        super(props);
        this.label = props.label;
        this.id = props.id;
        this.defaultChecked = props.defaultChecked;
        this.value = props.value;
        this.name = props.name;

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev) {
        console.log(`Radiobutton group ${this.name} value is ${this.value}`);
    }

    render() {
        const
            defaultChecked = 'defaultChecked';

        return <Radio id={this.id} name={this.name} defaultChecked={this.defaultChecked ? defaultChecked : ''}
                      onClick={this.handleClick}>{this.label}</Radio>;
    }

}

export default Radiobutton;
