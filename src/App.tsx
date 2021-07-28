import React, { ReactElement } from "react";
import { Button, Form, Input } from "./ui/components";
import "./App.scss";
import "./index.scss";

function App(): ReactElement {
  return (
    <div className="App">
      <div style={{ width: "300px", margin: "auto" }}>
        <Form>
          <Button size="large" label="Click Me Plz" actionType="primary" />
          <br />
          <br />
          <Input
            error="Enter a valid email"
            type="text"
            label="Enter name"
            size="md"
            helpText="Add contextual help."
          />
        </Form>
      </div>
    </div>
  );
}

export default App;
