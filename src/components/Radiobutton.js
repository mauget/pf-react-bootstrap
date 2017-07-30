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

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev) {
        console.log(`${this.id} selected`);
    }

    render() {
        const
            defaultChecked = 'defaultChecked';

        return <Radio id={this.id} name={this.name} defaultChecked={this.defaultChecked ? defaultChecked : ''}
                      onChange={this.handleChange}>{this.label}</Radio>;

    }

}

export default Radiobutton;
