import React, { ReactElement, useState } from "react";
import { Button, Form, Input } from "./ui/components";
import "./App.scss";
import "./index.scss";

function App(): ReactElement {
  const [val, setVal] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e) {
      setVal(e.target.value);
    }
  };
  return (
    <div className="App">
      <div style={{ width: "300px", margin: "5rem" }}>
        <Form>
          <>
            <Button size="large" label=":(:(:(:(" actionType="primary" />
            <br />
            <br />
            <Input
              label="Full name"
              size="md"
              helpText="Verified Change"
              onChange={onChange}
              value={val}
              // todo make validation work
              restrictedCharacters="<>"
            />
          </>
        </Form>
      </div>
    </div>
  );
}

export default App;
