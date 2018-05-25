import * as React from "react";

import Header from "./Header";

export default class extends React.PureComponent {
  render(): React.ReactNode {
    return [
      <Header />,
      this.props.children
    ]
  }
}
