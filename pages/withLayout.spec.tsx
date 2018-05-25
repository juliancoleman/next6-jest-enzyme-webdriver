import { mount, shallow } from "enzyme";
import { writeFileSync } from "fs";
import { defaultTo } from "ramda";
import * as React from "react";

import WithLayout from "./withLayout";
import filterInt from "../helpers/filterInt";
import webdriver from "../helpers/next-webdriver";

const PORT: number = 3000;
const defaultPort = defaultTo(PORT);
const port: number = defaultPort(filterInt(process.env.PORT));

const one: number = 1;
const once: number = 1;

let screenshot;

describe("WithLayout page", () => {
  it("navigates to Index page when the `Index` link is clicked", async () => {
    const browser = webdriver(port, "/withLayout");

    screenshot = await browser.saveScreenshot();
    await writeFileSync("./screenshots/with-layout-page.png", screenshot);

    await browser.click("a[href='index']");

    screenshot = await browser.saveScreenshot();
    await writeFileSync("./screenshots/navigate-to-index-page.png", screenshot);

    expect(new URL(await browser.getUrl()).pathname).toBe("/index");
  });
});
