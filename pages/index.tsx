import * as React from "react";

interface IndexProps {
  [key: string]: any;
}

export default class extends React.PureComponent<IndexProps> {
  render(): React.ReactElement<HTMLHeadingElement> {
    return (
      <h1>Index page</h1>
    );
  }
}
