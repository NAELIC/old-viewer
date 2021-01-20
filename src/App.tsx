import React from "react";
import { DataMessage } from "@nodetron/types/data";
import "./App.css";
import { ViewerField } from "./features/viewerField/viewerField";

import messageHandler from "./app/websocketHandler";

class App extends React.Component {
  ws = new WebSocket("ws://localhost:7882/");

  componentDidMount() {
    this.ws.onopen = () => {
      console.log("connected");
    };

    this.ws.onmessage = (evt) => {
      const message: DataMessage = JSON.parse(evt.data);
      messageHandler(message);
    };

    this.ws.onclose = () => {
      console.log("disconnected");
    };
  }

  render() {
    return (
      <div className="App">
        <ViewerField />
      </div>
    );
  }
}

export default App;
