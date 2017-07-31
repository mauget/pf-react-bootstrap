import React, {Component} from 'react';
import '../App.css'
import {Image} from 'react-bootstrap';

export class Picture extends Component {

    constructor(props) {
        super(props);
        this.id = props.id;
        this.src = props.src;

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
    }

    render() {
        return <div><Image id={this.id} src={this.src} onClick={this.handleClick} responsive/></div>;
    }

}

export default Picture;
