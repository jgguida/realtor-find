import React from "react";
import { StatusBar, YellowBox } from "react-native";

import Routes from "./src/routes";

YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

export default class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#003f5c" />
        <Routes />
      </>
    );
  }
}
