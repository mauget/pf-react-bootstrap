import React, {Component} from 'react';
import '../App.css'
import {FormGroup, Button} from 'react-bootstrap';

// Note that "Form" is a Bootstrap user interaction layout wrapper, not a PerfectForms form.
export class ButtonPF extends Component {

    constructor(props) {
        super(props);
        this.id = props.id;
        this.color = props.color;

        // Declare any event handlers here
    }

    render() {
        return <FormGroup row>
            <Button id={this.id} color={this.color}>{this.props.children}</Button>
        </FormGroup>;

    }

}

export default ButtonPF;
