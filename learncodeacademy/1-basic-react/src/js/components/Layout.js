import React from "react";

import Footer from "./Footer"
import Header from "./Header"

export default class Layout extends React.Component {
  constructor() {
    super();
    this.name = "Dale"
  }
  render() {
    return (
        <div>
          <Header />
          <h1>It's {this.name}!</h1>
          <Footer />
        </div>
    );
  }
}