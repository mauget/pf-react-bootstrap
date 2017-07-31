import React, {Component} from 'react';
import './App.css';
import {Page} from './components/Page';
import {Section} from './components/Section'
import {CheckboxPF} from './components/CheckboxPF';
import {Radiobutton} from './components/Radiobutton';
import {ButtonPF} from './components/ButtonPF';
import {Heading3} from './components/Heading3';
import {TextInput} from './components/TextInput';
import {Dropdown} from './components/Dropdown';
import {Option} from './components/Option';
import {Picture} from './components/Picture';
import {LineChart} from './components/LineChart';

class App extends Component {

    render() {

        // Demo boilerplate
        const lineChartData = {
            columns: [
                ['data1', 30, 200, 100, 400, 150, 250],
                ['data2', 50, 20, 10, 40, 15, 25]
            ]
        };

        return (
            <Page id="page1" title='POC of "React Bootstrap" Lib '>

                <Section title="Section 1">
                    <Heading3>First Name</Heading3>
                    <TextInput name="firstName" id="firstName" value="" placeholder="First"/>

                    <Heading3>Last Name</Heading3>
                    <TextInput name="lastName" id="lastName" value="" placeholder="Last"/>
                </Section>

                <Section title="Section 2">
                    <Heading3>Pick One Option</Heading3>
                    <Dropdown name="exampleSelect" id="exampleSelect" selectedValue="fire">
                        <Option value="earth">Earth</Option>
                        <Option value="wind">Wind</Option>
                        <Option value="fire">Fire</Option>
                        <Option value="water">Water</Option>
                        <Option value="other">...</Option>
                    </Dropdown>

                    <CheckboxPF id="cb1" label="Check me out" defaultChecked="true"/>

                    <Radiobutton id="rb1" value="1" name="radioGroup" label="Option 1" defaultChecked="true"/>
                    <Radiobutton id="rb2" value="2" name="radioGroup" label="Option 2"/>
                    <Radiobutton id="rb3" value="3" name="radioGroup" label="Option 3"/>

                    <ButtonPF id="sendButton" bsStyle="primary">Send</ButtonPF>

                </Section>

                <Section title="Section 3">
                    <Picture id="img1" src={"assets/horse.jpg"}  />
                </Section>

                <Section title="Section 4">
                    <Heading3>Line Chart</Heading3>
                    <LineChart id="lineChart1" src={lineChartData} />
                </Section>
            </Page>

        );
    }
}

export default App;
