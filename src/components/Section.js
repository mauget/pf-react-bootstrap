import React, {Component} from 'react';
import '../App.css'
import {Form} from 'react-bootstrap';

// Note that "Form" is a Bootstrap user interaction layout wrapper, not a PerfectForms form.
export class Section extends Component {

    constructor(props) {
        super(props);
        this.title = props.title;
        this.id = props.id;

        // Declare any event handlers here
    }

    render() {
        return <Form id={this.id}
             style={{marginTop: "1em", borderTop: "dashed 2px red"}}>{this.title}{this.props.children}</Form>;

    }

}

export default Section;
