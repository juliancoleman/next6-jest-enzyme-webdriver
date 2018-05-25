import * as React from "react";

import Layout from "../components/Layout";

export default class extends React.PureComponent {
  render(): React.ReactElement<Layout> {
    return (
      <Layout>
        <h1>Page with layout.</h1>
      </Layout>
    )
  }
}
