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

class App extends Component {
    render() {
        return (
            <Page id="page1" title='POC of "React Bootstrap" Lib (page title optional)'>

                <Section title="Section One (title optional)">
                    <Heading3>First Name</Heading3>
                    <TextInput name="firstName" id="firstName" value="" placeholder="First"/>

                    <Heading3>Last Name</Heading3>
                    <TextInput name="lastName" id="lastName" value="" placeholder="Last"/>
                </Section>

                <Section title="Section Two (title optional)">
                    <Heading3>Pick One Option</Heading3>
                    <Dropdown name="select" id="exampleSelect">
                        <option>Earth</option>
                        <option>Wind</option>
                        <option>Fire</option>
                        <option>Water</option>
                        <option value="other">...</option>
                    </Dropdown>

                    <CheckboxPF id="cb1" label="Check me out" defaultChecked="true"/>

                    <Radiobutton id="rb1" value="1" name="radioGroup" label="Option 1" defaultChecked="true"/>
                    <Radiobutton id="rb2" value="2" name="radioGroup" label="Option 2"/>
                    <Radiobutton id="rb3" value="3" name="radioGroup" label="Option 3"/>

                    <ButtonPF bsStyle="primary">Send</ButtonPF>

                </Section>
            </Page>

        );
    }
}

export default App;
