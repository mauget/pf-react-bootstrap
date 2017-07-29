import React, {Component} from 'react';
import '../App.css'
import {Grid} from 'react-bootstrap';

export class Page extends Component {

    constructor(props) {
        super(props);
        this.title = props.title;
        this.id = props.id;

        // Declare any event handlers here
    }

    render() {
        return <Grid id={this.id}
                     style={{border: "solid green 1px", paddingBottom: "1em"}}>{this.title}{this.props.children}</Grid>;

    }

}

export default Page;
