import React from "react";

import withMain from "../hoc/main";

class Page extends React.Component {
  static getInitialProps() {
    return {
      place: "world",
      withMainThing: <h1>hello</h1>
    };
  }

  render() {
    return <p>{this.props.place}</p>;
  }
}

export default withMain(Page);
