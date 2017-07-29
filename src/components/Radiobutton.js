import React, {Component} from 'react';
import '../App.css'
import {FormGroup, Radio} from 'react-bootstrap';

// Note that "Form" is a Bootstrap user interaction layout wrapper, not a PerfectForms form.
export class Radiobutton extends Component {

    constructor(props) {
        super(props);
        this.label = props.label;
        this.id = props.id;
        this.checked = props.checked;
        this.inline = props.inline;

        // Declare any event handlers here
    }

    render() {
        const
            checked = 'checked',
            inline = 'inline';

        return <FormGroup row>
            <Radio id={this.id} checked={this.checked ? checked : ''} inline={this.inline ? inline : ''} >{this.label}</Radio>
        </FormGroup>;

    }

}

export default Radiobutton;
