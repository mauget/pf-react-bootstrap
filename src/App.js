import React, {Component} from 'react';
import './App.css';
import {FormControl, FormGroup, Label, ControlLabel} from 'react-bootstrap';
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
                    <FormGroup row>
                        <Label for="firstName">First Name</Label>
                        <FormControl type="text" name="firstName" id="firstName" placeholder="First"/>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="firstName">Last Name</Label>
                        <FormControl type="text" name="lastName" id="lastName" placeholder="Last name"/>
                    </FormGroup>
                </Section>

                <Section title="Section Two (title optional)">
                    <FormGroup row>
                        <ControlLabel>Pick One Option</ControlLabel>
                        <FormControl componentClass="select" name="select" id="exampleSelect">
                            <option>Earth</option>
                            <option>Wind</option>
                            <option>Fire</option>
                            <option>Water</option>
                            <option value="other">...</option>
                        </FormControl>
                    </FormGroup>

                    <CheckboxPF  label="Check me out"/>

                    <Radiobutton name="radioGroup" checked="true" label="Option 1"/>
                    <Radiobutton name="radioGroup" label="Option 2"/>
                    <Radiobutton name="radioGroup" label="Option 3"/>


                    <ButtonPF>Send</ButtonPF>

                </Section>
            </Page>

        );
    }
}

export default App;
