import React, { PureComponent, ReactElement } from "react";

interface IndexProps {
  [key: string]: any;
}

export default class extends PureComponent<IndexProps> {
  render(): ReactElement<HTMLHeadingElement> {
    return (
      <h1>Index page</h1>
    );
  }
}
