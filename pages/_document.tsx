// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import * as React from "react";
import Document, { Main, NextScript, Head } from "next/document";

import style from "./_document.styles";

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          {/* <link rel="stylesheet" href={cssPath} /> */}
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
          <style jsx>{style}</style>
        </body>
      </html>
    )
  }
}
