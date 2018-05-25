import { mount, shallow } from "enzyme";
import { writeFileSync } from "fs";
import { defaultTo } from "ramda";
import * as React from "react";

import Index from ".";
import filterInt from "../helpers/filterInt";
import webdriver from "../helpers/next-webdriver";

const PORT: number = 3000;
const defaultPort = defaultTo(PORT);
const port: number = defaultPort(filterInt(process.env.PORT));

const one: number = 1;
const once: number = 1;

let screenshot;

describe("Index page", () => {
  describe("<Index />", () => {
    it("mounts properly", () => {
      const wrapper = shallow(<Index />);

      expect(wrapper.exists()).toBe(true);
    });

    it("contains a single h1", () => {
      const wrapper = shallow(<Index />);

      expect(wrapper.find("h1")).toHaveLength(one);
    });

    describe("#render", () => {
      it("is called only once", () => {
        const spy = jest.spyOn(Index.prototype, "render");
        mount(<Index />);

        expect(spy).toHaveBeenCalledTimes(once);

        spy.mockClear();
      });
    });
  });

  it("renders a single h1", async () => {
    const browser = webdriver(port, "/");

    screenshot = await browser.saveScreenshot();
    await writeFileSync("./screenshots/index.png", screenshot);

    expect(await browser.getText("h1")).toBe("Index page");

    browser.close();
  });
});
