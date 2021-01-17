import React from "react";
import "./App.css";

class App extends React.Component {
  ws = new WebSocket("ws://localhost:7882/");

  componentDidMount() {
    this.ws.onopen = () => {
      console.log("connected");
    };

    this.ws.onmessage = (evt) => {
      // listen to data sent from the websocket server
      const message = JSON.parse(evt.data);
      // this.setState({ dataFromServer: message });
      console.log(message);
    };

    this.ws.onclose = () => {
      console.log("disconnected");
    };
  }

  render() {
    return <div className="App"></div>;
  }
}

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

export default App;
