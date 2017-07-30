import React, {Component} from 'react';
import {FormControl} from 'react-bootstrap';
import '../App.css'

export class Dropdown extends Component {

    constructor(props) {
        super(props);
        this.id = props.id;
        this.name = props.name;
        this.selectedValue = props.selectedValue;

        // this.setState({value: 'fire'});

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev) {
        this.setState({value: ev.target.value});
    }

    render() {
        console.log(`Dropdown ${this.id} value`, this.state ? this.state.value : '');
        return <FormControl componentClass="select" name={this.name} id={this.id}
            onChange={this.handleChange} >{this.props.children}</FormControl>;
    }

}

export default Dropdown;
