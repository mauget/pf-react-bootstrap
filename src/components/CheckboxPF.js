import React, {Component} from 'react';
import '../App.css'
import {Checkbox} from 'react-bootstrap';

export class CheckboxPF extends Component {

    constructor(props) {
        super(props);
        this.label = props.label;
        this.id = props.id;
        this.defaultChecked = props.defaultChecked;
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev) {

        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        console.log(`Checkbox ${this.state.isToggleOn}`);
    }

    render() {
        const defaultChecked = 'true';
        return <Checkbox id={this.id} defaultChecked={this.defaultChecked ? defaultChecked : ''}
                 onClick={this.handleClick}>{this.label}</Checkbox>;
    }

}

export default CheckboxPF;
