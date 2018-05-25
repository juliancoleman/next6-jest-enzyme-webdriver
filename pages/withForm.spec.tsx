import { mount, shallow } from "enzyme";
import { writeFileSync } from "fs";
import { defaultTo } from "ramda";
import * as React from "react";

import WithForm from "./withForm";
import filterInt from "../helpers/filterInt";
import webdriver from "../helpers/next-webdriver";

const PORT: number = 3000;
const defaultPort = defaultTo(PORT);
const port: number = defaultPort(filterInt(process.env.PORT));

const one: number = 1;
const once: number = 1;

let screenshot;

describe("WithForm page", () => {
  it("procedurally fills out the form", async () => {
    const browser = webdriver(port, "/withForm");

    screenshot = await browser.saveScreenshot();
    await writeFileSync("./screenshots/form-empty.png", screenshot);

    await browser.setValue("input[name='email']", "test@videoa.mp");

    screenshot = await browser.saveScreenshot();
    await writeFileSync("./screenshots/email-filled.png", screenshot);

    await browser.setValue("input[name='password'", "supreme100!");

    screenshot = await browser.saveScreenshot();
    await writeFileSync("./screenshots/password-filled.png", screenshot);

    browser.close();
  });
});
