import React, {ReactElement} from "react";
import {Button, Form, Input} from "./ui/components"; 
import logo from "./logo.svg";
import "./App.css";

function App(): ReactElement {
	return (
		<div className="App">
			<img src={logo} className="App-logo" alt="logo" />
			<Form>
				<Button size="large" label="Click Me Plz" actionType="primary" />
        <br />
        <br />
        <Input type="text" label="Enter name" size="sm" helpText="Enter a valid email address please and thank you." />
			</Form>
		</div>
	);
}


export default App;
