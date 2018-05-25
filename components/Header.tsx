import * as React from "react";

import Router from "../router";
const { Link } = Router;

import styles from "./Header.styles";

export default class extends React.PureComponent {
  render() {
    return (
      <header>
        <Link href="index">
          <a>Index</a>
        </Link>
        <Link href="withLayout">
          <a>With layout</a>
        </Link>
        <Link href="withForm">
          <a>With form</a>
        </Link>
        <style jsx>{styles}</style>
      </header>
    );
  }
}
