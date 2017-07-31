import React, {Component} from 'react';
import '../App.css'
import C3Chart from 'react-c3js';
import 'c3/c3.css';

export class LineChart extends Component {

    constructor(props) {
        super(props);
        this.label = props.label;
        this.id = props.id;
        this.defaultChecked = props.defaultChecked;
        this.data = props.src;

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(ev) {
    }

    render() {
        return <C3Chart data={this.data} />;
    }

}

export default LineChart;
