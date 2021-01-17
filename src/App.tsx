import React from "react";
import { Data } from "@nodetron/types/internal/data";
import "./App.css";
import Field from "@bit/naelic.viewer.field";

import messageHandler from "./app/websocketHandler";
import { ballPosition } from "./app/data/ball";
import { store } from "./app/store";
import { field } from "./app/data/field";

class App extends React.Component {
  ws = new WebSocket("ws://localhost:7882/");

  componentDidMount() {
    this.ws.onopen = () => {
      console.log("connected");
    };

    this.ws.onmessage = (evt) => {
      const message: Data = JSON.parse(evt.data);
      messageHandler(message);
    };

    this.ws.onclose = () => {
      console.log("disconnected");
    };
  }

  render() {
    const canvasSize = { width: 1080, height: 700 };

    return (
      <div className="App" style={canvasSize}>
        <Field
          ball={{ position: ballPosition(store.getState()), radius: 0.0215 }}
          robots={{
            blue: [],
            yellow: [],
          }}
          field={{
            ...field(store.getState()),
          }}
          container={canvasSize}
          color="#197dd4"
        />
      </div>
    );
  }
}

export default App;
