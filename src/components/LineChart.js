import React, {Component} from 'react';
import '../App.css'
import C3Chart from 'react-c3js';
import 'c3/c3.css';

export class LineChart extends Component {

    constructor(props) {
        super(props);
        this.id = props.id;
        // this.src = props.src;

        this.data = {};
        this.data.columns = props.src.columns;
        this.data.type = 'line';

        this.handleClick = this.handleClick.bind(this);
    }

    // Note that c3 onClick is set in the data object.
    handleClick(ev) {
    }

    render() {
        return <C3Chart data={this.data} />;
    }

}

export default LineChart;
