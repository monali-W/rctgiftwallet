import React, { Component } from "react";

import Directory from "./components/DirectoryComponent";
import Menubar from "./components/NavbarComponent";
import "./App.css";
import { GIFTCARDS } from "./shared/GiftCards";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giftcards: GIFTCARDS
    };
  }
  render() {
    return (
      <div className="App">
        <Menubar />
        <Directory giftcards={this.state.giftcards} />
      </div>
    );
  }
}

export default App;
