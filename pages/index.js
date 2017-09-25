import React from "react";

import withMain from "../hoc/main";

class Page extends React.Component {
  static getInitialProps() {
    return {
      place: "world"
    };
  }

  static getMainThing() {
    return <h1>hello</h1>;
  }

  render() {
    return <p>{this.props.place}</p>;
  }
}

export default withMain(Page);
