import React, { ReactElement } from "react";
import { Button, Form, Input } from "./ui/components";
import "./App.scss";
import "./index.scss";

function App(): ReactElement {
  return (
    <div className="App">
      <div style={{ width: "300px", margin: "5rem" }}>
        <Form>
          <>
            <Button size="large" label="Click Me Plz" actionType="primary" />
            <br />
            <br />
            <Input
              label="Full name"
              size="md"
              helpText="dat help babes"
              value={"blhalkjsd"}
            />
          </>
        </Form>
      </div>
    </div>
  );
}

export default App;
