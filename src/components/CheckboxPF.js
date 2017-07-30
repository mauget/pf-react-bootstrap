import React, {Component} from 'react';
import '../App.css'
import {Checkbox} from 'react-bootstrap';

// Note that "Form" is a Bootstrap user interaction layout wrapper, not a PerfectForms form.
export class CheckboxPF extends Component {

    constructor(props) {
        super(props);
        this.label = props.label;
        this.id = props.id;
        this.defaultChecked = props.defaultChecked

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        console.log('CheckboxPF ' + this.id + ' changed');
    }

    render() {
        const defaultChecked = 'true';
        return <Checkbox id={this.id} defaultChecked={this.defaultChecked ? defaultChecked : ''}
                onChange={this.handleChange}>{this.label}</Checkbox>;
    }

}

export default CheckboxPF;
