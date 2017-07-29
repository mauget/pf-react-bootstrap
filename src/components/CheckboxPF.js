import React, {Component} from 'react';
import '../App.css'
import {FormGroup, Checkbox} from 'react-bootstrap';

// Note that "Form" is a Bootstrap user interaction layout wrapper, not a PerfectForms form.
export class CheckboxPF extends Component {

    constructor(props) {
        super(props);
        this.label = props.label;
        this.id = props.id;
        this.checked = props.checked

        // Declare any event handlers here
    }

    render() {
        const checked = 'checked';
        return <FormGroup row>
            <Checkbox id={this.id} checked={this.checked ? checked : ''} inline>{this.label}</Checkbox>
        </FormGroup>;

    }

}

export default CheckboxPF;
