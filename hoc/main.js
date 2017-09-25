import React from "react";

export default function MainLayout(Child) {
  return class MainLayoutComponent extends React.Component {
    static getInitialProps(context) {
      return Child.getInitialProps(context);
    }

    render() {
      return (
        <div>
          {this.props.withMainThing}

          <Child {...this.props} />
        </div>
      );
    }
  };
}
