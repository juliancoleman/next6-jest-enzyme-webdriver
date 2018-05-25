import * as React from "react";
import Layout from "../components/Layout";

export default class extends React.PureComponent {
  render(): React.ReactElement<Layout> {
    return (
      <Layout>
        <h1>Page with form</h1>

        <form action=".">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </form>
      </Layout>
    );
  }
}
