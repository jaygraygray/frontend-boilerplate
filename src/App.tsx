import React, {ReactElement} from "react";
import {Button, Form} from "./ui/components"; 
import logo from "./logo.svg";
import "./App.css";

function App(): ReactElement {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
          Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
          Learn React
				</a>
			<Form>
				<Button size="large" label="Click Me Plz" outline actionType="danger" disabled />
			</Form>
			</header>
		</div>
	);
}


export default App;
