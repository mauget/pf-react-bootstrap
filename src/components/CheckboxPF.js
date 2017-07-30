import React, {Component} from 'react';
import '../App.css'
import {Checkbox} from 'react-bootstrap';

export class CheckboxPF extends Component {

    constructor(props) {
        super(props);
        this.label = props.label;
        this.id = props.id;
        this.defaultChecked = props.defaultChecked;

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev) {
        console.log(`Checkbox ${ev.target.value}`);
    }

    render() {
        const defaultChecked = 'true';
        return <Checkbox id={this.id} defaultChecked={this.defaultChecked ? defaultChecked : ''}
                 onChange={this.handleChange}>{this.label}</Checkbox>;
    }

}

export default CheckboxPF;
