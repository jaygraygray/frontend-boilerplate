import React, {ReactElement} from "react";
import {Button, Form, Input} from "./ui/components"; 
import logo from "./logo.svg";
import "./App.css";

function App(): ReactElement {
	return (
		<div className="App">
			<img src={logo} className="App-logo" alt="logo" />
      <div style={{width: "300px",margin: "auto"}} >
        <Form>
          <Button size="large" label="Click Me Plz" actionType="primary" />
          <br />
          <br />
          <Input error="ruh roh you dumaass" type="text" label="Enter name" size="sm" helpText="Enter a valid email address please and thank you." />
        </Form>
      </div>
		</div>
	);
}


export default App;
