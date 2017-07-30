import React, {Component} from 'react';
import './App.css';
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap';
import {Page} from './components/Page';
import {Section} from './components/Section'
import {CheckboxPF} from './components/CheckboxPF';
import {Radiobutton} from './components/Radiobutton';
import {ButtonPF} from './components/ButtonPF';

class App extends Component {
    render() {
        return (
            <Page id="page1" title='POC of "React Bootstrap" Lib (page title optional)'>

                <Section title="Section One (title optional)">
                    <FormGroup>
                        <ControlLabel>First Name</ControlLabel>
                        <FormControl type="text" name="firstName" id="firstName" placeholder="First"/>
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>Last Name</ControlLabel>
                        <FormControl type="text" name="lastName" id="lastName" placeholder="Last"/>
                    </FormGroup>
                </Section>

                <Section title="Section Two (title optional)">
                    <FormGroup>
                        <ControlLabel>Pick One Option</ControlLabel>
                        <FormControl componentClass="select" name="select" id="exampleSelect">
                            <option>Earth</option>
                            <option>Wind</option>
                            <option>Fire</option>
                            <option>Water</option>
                            <option value="other">...</option>
                        </FormControl>
                    </FormGroup>

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
